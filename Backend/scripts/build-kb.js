require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const KBEntry = require('../models/KBEntry');

const FRONTEND = path.join(__dirname, '..', '..', 'Frontend');
const ROUTE_META_FILE = path.join(FRONTEND, 'src', 'seo', 'routeMeta.ts');

// Only Products pages currently hold a `faqsData = [{ question, answer }, ...]`
// block in the source (confirmed by inspection); other verticals don't have
// one in this shape yet.
const PRODUCT_FAQ_FILES = [
    { file: 'src/pages/Products/AutoExtract.tsx', link: '/products/auto-extract' },
    { file: 'src/pages/Products/GateCheck.tsx', link: '/products/gatecheck' },
    { file: 'src/pages/Products/Jatayu.tsx', link: '/products/jatayu' },
    { file: 'src/pages/Products/NxDesk.tsx', link: '/products/nxdesk' },
    { file: 'src/pages/Products/Nxify.tsx', link: '/products/nxify' },
];

// routeMeta.ts descriptions double as page <meta name="description"> tags, so
// several of them end with a hand-written CTA sentence aimed at search-result
// readers (see routeMeta.ts). The KB's escalation_cta/escalation_link fields
// already prompt users to contact the team, so that trailing sentence is
// redundant inside the KB answer text and is stripped before storage — the
// source file itself (and the live SEO description) is left untouched.
const TRAILING_CTA_SENTENCES = [
    'Reach out to Sria Infotech to learn more or request a walkthrough.',
    'Get in touch with our team to discuss your specific requirements and timelines.',
    "Contact Sria Infotech to explore how this fits your organization's roadmap.",
    'Our consultants can walk you through scope, effort and next steps.',
];

function stripTrailingCta(text) {
    for (const cta of TRAILING_CTA_SENTENCES) {
        if (text.endsWith(cta)) {
            return text.slice(0, text.length - cta.length).trim();
        }
    }
    return text;
}

const STOPWORDS = new Set([
    'and', 'the', 'for', 'with', 'our', 'your', 'from', 'to', 'in', 'on', 'at',
    'by', 'is', 'are', 'a', 'an', 'of', 'or', 'sria', 'infotech', 'services',
    'solutions', 'get', 'contact', 'team', 'discuss', 'learn', 'more',
    'explore', 'about', 'this', 'you', 'across', 'into', 'through', 'can',
    'what', 'who', 'how', 'does', 'do', 'yes', 'no',
]);

// routeMeta.ts is TypeScript, so it can't be require()'d directly from this
// plain Node script. ROUTE_META entries are flat { title, description, noindex? }
// objects with no nesting, so a bounded regex over the isolated object body is
// reliable here without pulling in a TS/AST parser dependency.
function parseRouteMeta(tsContent) {
    const marker = 'export const ROUTE_META';
    const startIdx = tsContent.indexOf(marker);
    if (startIdx === -1) {
        throw new Error('Could not find "export const ROUTE_META" in routeMeta.ts');
    }
    const braceStart = tsContent.indexOf('{', startIdx);
    let depth = 0;
    let end = -1;
    for (let i = braceStart; i < tsContent.length; i++) {
        if (tsContent[i] === '{') depth++;
        else if (tsContent[i] === '}') {
            depth--;
            if (depth === 0) {
                end = i;
                break;
            }
        }
    }
    if (end === -1) {
        throw new Error('Could not find matching closing brace for ROUTE_META');
    }
    const body = tsContent.slice(braceStart + 1, end);

    const entryRegex = /"(\/[^"]*)":\s*\{([^}]*)\}/g;
    const routes = {};
    let m;
    while ((m = entryRegex.exec(body))) {
        const routePath = m[1];
        const block = m[2];
        const titleMatch = block.match(/title:\s*"((?:[^"\\]|\\.)*)"/);
        const descMatch = block.match(/description:\s*"((?:[^"\\]|\\.)*)"/);
        if (!titleMatch || !descMatch) continue;
        routes[routePath] = {
            title: unescapeJsString(titleMatch[1]),
            description: unescapeJsString(descMatch[1]),
            noindex: /noindex:\s*true/.test(block),
        };
    }
    return routes;
}

function extractFaqs(src) {
    const dataIdx = src.indexOf('faqsData');
    if (dataIdx === -1) return [];
    const arrStart = src.indexOf('[', dataIdx);
    if (arrStart === -1) return [];
    let depth = 0;
    let end = -1;
    for (let i = arrStart; i < src.length; i++) {
        if (src[i] === '[') depth++;
        else if (src[i] === ']') {
            depth--;
            if (depth === 0) {
                end = i;
                break;
            }
        }
    }
    if (end === -1) return [];
    const block = src.slice(arrStart, end + 1);

    const faqRegex = /question:\s*"((?:[^"\\]|\\.)*)"\s*,\s*answer:\s*"((?:[^"\\]|\\.)*)"/g;
    const faqs = [];
    let m;
    while ((m = faqRegex.exec(block))) {
        faqs.push({
            question: unescapeJsString(m[1]),
            answer: unescapeJsString(m[2]),
        });
    }
    return faqs;
}

function unescapeJsString(s) {
    return s.replace(/\\"/g, '"').replace(/\\n/g, ' ').replace(/\\\\/g, '\\').trim();
}

// Routes that genuinely belong to a KB category but don't live under that
// category's own /prefix/ (e.g. /app-store is a Products page, not nested
// under /products/). Without this, categorize() silently sent them to
// outOfScope and no KB entry was ever generated for them at all.
const FLAT_ROUTE_CATEGORIES = {
    '/app-store': 'Products',
};

// subcategoryFromTitle() would derive "Product Catalogue" from this route's
// routeMeta.ts title, but the KB already has a hand-authored "App Store"
// entry for it (the App Store page also lists individual apps not covered by
// routeMeta.ts at all, so it needed manual content beyond what auto-extraction
// could produce). Without this override, the two subcategory strings would
// never match on lookup and build-kb.js would create a duplicate instead of
// finding/skipping the existing entry.
const SUBCATEGORY_OVERRIDES = {
    '/app-store': 'App Store',
};

function categorize(link) {
    if (FLAT_ROUTE_CATEGORIES[link]) return FLAT_ROUTE_CATEGORIES[link];
    if (link.startsWith('/products/')) return 'Products';
    if (link.startsWith('/services/')) return 'Services';
    if (link.startsWith('/solutions/')) return 'Solutions';
    if (link.startsWith('/customer-stories/')) return 'CustomerStories';
    if (link.startsWith('/partners/')) return 'Partners';
    if (link === '/about' || link.startsWith('/about/') || link === '/careers' || link === '/gallery') return 'About';
    return null;
}

function subcategoryFromTitle(title) {
    const beforePipe = title.split('|')[0].trim();
    return beforePipe || title.trim();
}

function extractKeywords(seedText, bodyText) {
    const text = `${seedText} ${bodyText}`.toLowerCase();
    const words = text.match(/[a-z0-9]+/g) || [];
    const keywords = [];
    const seen = new Set();
    for (const w of words) {
        if (w.length < 3 || STOPWORDS.has(w) || seen.has(w)) continue;
        seen.add(w);
        keywords.push(w);
        if (keywords.length >= 6) break;
    }
    return keywords;
}

function buildQuestionPatterns(subcategory) {
    const s = subcategory.toLowerCase();
    return [
        `what is ${s}`,
        `tell me about ${s}`,
        `information about ${s}`,
    ];
}

function computeDepth(answer) {
    const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
    return wordCount < 40 ? 'brief' : 'full';
}

// Hand-authored category-overview entries. routeMeta.ts only has metadata for
// individual leaf pages (e.g. /solutions/ariba) — there's no "/products",
// "/services" or "/solutions" index route to auto-extract from — so a broad
// question like "what solutions do you provide" had nothing in the KB to
// match and always fell through to the generic fallback. These entries give
// that class of question a real, matchable answer.
const OVERVIEW_ENTRIES = [
    {
        category: 'About',
        subcategory: 'Overview',
        // General "what does sria do" questions need to out-rank the
        // Solutions/Overview entry below on Fuse's score, since both entries
        // share SAP-ish vocabulary. Keeping this entry's own keywords/patterns
        // focused on company-identity phrasing (not SAP terms) is what keeps
        // "what does sria do" landing here instead of on Solutions/Overview —
        // see build-kb.test scores in the KB build log if this ever regresses.
        keywords: ['sria', 'infotech', 'company', 'do', 'about', 'overview', 'who'],
        question_patterns: [
            'what does sria do',
            'what does sria infotech do',
            'who is sria infotech',
            'about sria infotech',
            'what do you do',
            'tell me about sria',
            'tell me about sria infotech',
            'what is sria infotech',
        ],
        answer:
            "Sria Infotech is a SAP consulting and digital transformation company, helping enterprises implement, integrate and support SAP, Odoo and data platforms across India and global markets. We also build our own in-house products — Auto Extract, GateCheck, Jatayu, NxDesk and Nxify. Want the details on our SAP solutions specifically?",
        link: null,
        depth: 'full',
        // targetIds are wired up after all OVERVIEW_ENTRIES are upserted below
        // (they reference the other three entries' real _ids, which only
        // exist once those documents have been created).
        follow_up_options: [],
        escalation_cta: 'Talk to our team',
        escalation_link: '/contact',
    },
    {
        category: 'Products',
        subcategory: 'Overview',
        keywords: ['products', 'product', 'autoextract', 'nxdesk', 'nxify', 'jatayu', 'gatecheck'],
        question_patterns: [
            'what products does sria infotech provide',
            'what products do you have',
            'what products do you offer',
            'tell me about your products',
            'products',
            'it products',
        ],
        answer:
            "Sria Infotech builds five in-house products: Auto Extract (AI-powered document data extraction), NxDesk (smart ticketing), Nxify (HR, payroll & attendance automation), Jatayu (billing, accounting & facility management), and GateCheck (IoT-based facility and gate management). Which one would you like to know more about?",
        link: null,
        depth: 'full',
        follow_up_options: [],
        escalation_cta: 'Talk to our team',
        escalation_link: '/contact',
    },
    {
        category: 'Services',
        subcategory: 'Overview',
        keywords: ['services', 'service', 'sap', 'odoo', 'analytics', 'implementation', 'migration'],
        question_patterns: [
            'what services does sria infotech provide',
            'what services do you have',
            'what services do you offer',
            'tell me about your services',
            'services',
            'it services',
        ],
        answer:
            "We provide SAP services (Implementation, Global Rollouts, Application Development, Integration, Support & Maintenance, Upgrades, Migrations, Fiori Development, ABAP RAP Development), Odoo Implementation & Custom App Development, and Data Analytics. Which service are you interested in?",
        link: null,
        depth: 'full',
        follow_up_options: [],
        escalation_cta: 'Talk to our team',
        escalation_link: '/contact',
    },
    {
        category: 'Solutions',
        subcategory: 'Overview',
        keywords: ['solutions', 'solution', 'sap', 'erp', 'hxm', 'crm', 'btp', 'analytics', 'cloud'],
        question_patterns: [
            'what solutions does sria infotech provide',
            'what solutions do you have',
            'what solutions do you offer',
            'tell me about your solutions',
            'solutions',
            'it solutions',
            'it solutions that sria infotech provide',
        ],
        answer:
            "We deliver SAP solutions across five areas: SAP ERP (S/4HANA Public & Private Cloud, RISE with SAP), SAP HXM (SuccessFactors, Field Service Management, Asset Performance Management, Product Lifecycle), SAP CRM (Business Network, Commerce Cloud, Manufacturing & Logistics, Digital Manufacturing), SAP BTP (Fieldglass, Extended Warehouse Management), and SAP Analytics Cloud (Ariba, Concur, PaPM, Manufacturing Execution). Which area would you like to explore?",
        link: null,
        depth: 'full',
        follow_up_options: [],
        escalation_cta: 'Talk to our team',
        escalation_link: '/contact',
    },
];

// Returns 'created', 'updated', or 'skipped' (matched an existing entry that
// has editedManually: true — its answer/keywords/question_patterns are never
// touched by this script once a human has hand-tuned them; only `link` is
// still refreshed if the route itself moved, since a stale link is a real
// bug regardless of how the content was written).
async function upsertEntry(doc, filter) {
    const existing = await KBEntry.findOne(filter);

    if (existing && existing.editedManually) {
        if (doc.link !== undefined && doc.link !== existing.link) {
            await KBEntry.updateOne({ _id: existing._id }, { $set: { link: doc.link } });
        }
        return 'skipped';
    }

    const result = await KBEntry.findOneAndUpdate(
        filter,
        { $set: doc },
        { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    return result.createdAt.getTime() === result.updatedAt.getTime() ? 'created' : 'updated';
}

async function main() {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/sria_craft';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');

    let created = 0;
    let updated = 0;
    let skippedManual = 0;
    const outOfScope = [];
    const needsReview = [];
    const subcategoryByLink = {};

    for (const doc of OVERVIEW_ENTRIES) {
        const result = await upsertEntry(doc, { category: doc.category, subcategory: doc.subcategory });
        if (result === 'created') created++;
        else if (result === 'updated') updated++;
        else skippedManual++;
    }

    // Wire the About/Overview entry's follow_up_options to the real _ids of
    // the sibling overview entries — these only exist once the loop above has
    // run, so this has to happen as a second pass rather than inline in
    // OVERVIEW_ENTRIES. Skipped if About/Overview was hand-edited (editedManually)
    // or if a sibling overview entry is missing for any reason.
    const aboutOverview = await KBEntry.findOne({ category: 'About', subcategory: 'Overview' });
    if (aboutOverview && !aboutOverview.editedManually) {
        const [solutionsOverview, servicesOverview, productsOverview] = await Promise.all([
            KBEntry.findOne({ category: 'Solutions', subcategory: 'Overview' }),
            KBEntry.findOne({ category: 'Services', subcategory: 'Overview' }),
            KBEntry.findOne({ category: 'Products', subcategory: 'Overview' }),
        ]);
        const followUps = [];
        if (solutionsOverview) followUps.push({ label: 'SAP solutions breakdown', targetId: solutionsOverview._id });
        if (servicesOverview) followUps.push({ label: 'Our services', targetId: servicesOverview._id });
        if (productsOverview) followUps.push({ label: 'Our products', targetId: productsOverview._id });
        await KBEntry.updateOne({ _id: aboutOverview._id }, { $set: { follow_up_options: followUps } });
    }

    const raw = fs.readFileSync(ROUTE_META_FILE, 'utf8');
    const routes = parseRouteMeta(raw);

    for (const [link, meta] of Object.entries(routes)) {
        const category = categorize(link);
        if (!category) {
            outOfScope.push(`${link} — not in a KB category (Products/Services/Solutions/About/CustomerStories/Partners)`);
            continue;
        }
        if (meta.noindex) {
            needsReview.push(`${link} — placeholder/coming-soon page (noindex), no real content to extract yet`);
            continue;
        }

        const subcategory = SUBCATEGORY_OVERRIDES[link] || subcategoryFromTitle(meta.title);
        subcategoryByLink[link] = subcategory;
        const answer = stripTrailingCta(meta.description);
        if (!answer) {
            needsReview.push(`${link} — no description text found`);
            continue;
        }

        const doc = {
            category,
            subcategory,
            keywords: extractKeywords(subcategory, answer),
            question_patterns: buildQuestionPatterns(subcategory),
            answer,
            link,
            depth: computeDepth(answer),
            follow_up_options: [],
            escalation_cta: 'Talk to our team',
            escalation_link: '/contact',
        };

        const result = await upsertEntry(doc, { link, subcategory });
        if (result === 'created') created++;
        else if (result === 'updated') updated++;
        else skippedManual++;
    }

    for (const { file, link } of PRODUCT_FAQ_FILES) {
        const subcategory = subcategoryByLink[link];
        if (!subcategory) {
            needsReview.push(`${file} — no routeMeta entry found for ${link}, skipped FAQ extraction`);
            continue;
        }
        const filePath = path.join(FRONTEND, file);
        if (!fs.existsSync(filePath)) {
            needsReview.push(`${file} — file not found, skipped FAQ extraction`);
            continue;
        }
        const src = fs.readFileSync(filePath, 'utf8');
        const faqs = extractFaqs(src);
        if (!faqs.length) {
            needsReview.push(`${file} — expected a faqsData array but couldn't parse any question/answer pairs`);
            continue;
        }

        for (const faq of faqs) {
            const question = faq.question;
            const answer = faq.answer;
            if (!question || !answer) continue;

            const question_patterns = [question];
            const normalized = question.replace(/\?$/, '').toLowerCase();
            if (normalized !== question.toLowerCase()) question_patterns.push(normalized);

            const doc = {
                category: 'Products',
                subcategory,
                keywords: extractKeywords(`${subcategory} ${question}`, answer),
                question_patterns,
                answer,
                link,
                depth: computeDepth(answer),
                follow_up_options: [],
                escalation_cta: 'Talk to our team',
                escalation_link: '/contact',
            };

            const result = await upsertEntry(doc, {
                link,
                subcategory,
                'question_patterns.0': question,
            });
            if (result === 'created') created++;
            else if (result === 'updated') updated++;
            else skippedManual++;
        }
    }

    console.log('\n=== KB Build Summary ===');
    console.log(`Created: ${created}`);
    console.log(`Updated: ${updated}`);
    console.log(`Skipped ${skippedManual} manually-edited entries (answer/keywords/question_patterns preserved)`);
    console.log(`\nOut of category scope (${outOfScope.length}):`);
    outOfScope.forEach((l) => console.log(`  - ${l}`));
    console.log(`\nNeeds manual review (${needsReview.length}):`);
    needsReview.forEach((r) => console.log(`  - ${r}`));

    await mongoose.disconnect();
    console.log('\nMongoDB connection closed.');
}

main().catch((err) => {
    console.error('Fatal error building KB:', err);
    mongoose.disconnect().finally(() => process.exit(1));
});
