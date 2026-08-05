// READ-ONLY dry run of build-kb.js — computes exactly what the real script
// would generate for each entry, then does a read-only findOne (never
// findOneAndUpdate) against the live DB to report what WOULD change without
// writing anything. Logic copied verbatim from build-kb.js.
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const KBEntry = require('../models/KBEntry');

const FRONTEND = path.join(__dirname, '..', '..', 'Frontend');
const ROUTE_META_FILE = path.join(FRONTEND, 'src', 'seo', 'routeMeta.ts');

const PRODUCT_FAQ_FILES = [
    { file: 'src/pages/Products/AutoExtract.tsx', link: '/products/auto-extract' },
    { file: 'src/pages/Products/GateCheck.tsx', link: '/products/gatecheck' },
    { file: 'src/pages/Products/Jatayu.tsx', link: '/products/jatayu' },
    { file: 'src/pages/Products/NxDesk.tsx', link: '/products/nxdesk' },
    { file: 'src/pages/Products/Nxify.tsx', link: '/products/nxify' },
];

const TRAILING_CTA_SENTENCES = [
    'Reach out to Sria Infotech to learn more or request a walkthrough.',
    'Get in touch with our team to discuss your specific requirements and timelines.',
    "Contact Sria Infotech to explore how this fits your organization's roadmap.",
    'Our consultants can walk you through scope, effort and next steps.',
];

function stripTrailingCta(text) {
    for (const cta of TRAILING_CTA_SENTENCES) {
        if (text.endsWith(cta)) return text.slice(0, text.length - cta.length).trim();
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

function parseRouteMeta(tsContent) {
    const marker = 'export const ROUTE_META';
    const startIdx = tsContent.indexOf(marker);
    if (startIdx === -1) throw new Error('Could not find "export const ROUTE_META" in routeMeta.ts');
    const braceStart = tsContent.indexOf('{', startIdx);
    let depth = 0, end = -1;
    for (let i = braceStart; i < tsContent.length; i++) {
        if (tsContent[i] === '{') depth++;
        else if (tsContent[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end === -1) throw new Error('Could not find matching closing brace for ROUTE_META');
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
    let depth = 0, end = -1;
    for (let i = arrStart; i < src.length; i++) {
        if (src[i] === '[') depth++;
        else if (src[i] === ']') { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end === -1) return [];
    const block = src.slice(arrStart, end + 1);
    const faqRegex = /question:\s*"((?:[^"\\]|\\.)*)"\s*,\s*answer:\s*"((?:[^"\\]|\\.)*)"/g;
    const faqs = [];
    let m;
    while ((m = faqRegex.exec(block))) faqs.push({ question: unescapeJsString(m[1]), answer: unescapeJsString(m[2]) });
    return faqs;
}

function unescapeJsString(s) {
    return s.replace(/\\"/g, '"').replace(/\\n/g, ' ').replace(/\\\\/g, '\\').trim();
}

const FLAT_ROUTE_CATEGORIES = {
    '/app-store': 'Products',
};

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
    return [`what is ${s}`, `tell me about ${s}`, `information about ${s}`];
}

function computeDepth(answer) {
    const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
    return wordCount < 40 ? 'brief' : 'full';
}

const OVERVIEW_ENTRIES = [
    {
        category: 'Products', subcategory: 'Overview',
        keywords: ['products', 'product', 'autoextract', 'nxdesk', 'nxify', 'jatayu', 'gatecheck'],
        question_patterns: ['what products does sria infotech provide', 'what products do you have', 'what products do you offer', 'tell me about your products', 'products', 'it products'],
        answer: "Sria Infotech builds five in-house products: Auto Extract (AI-powered document data extraction), NxDesk (smart ticketing), Nxify (HR, payroll & attendance automation), Jatayu (billing, accounting & facility management), and GateCheck (IoT-based facility and gate management). Which one would you like to know more about?",
        link: null, depth: 'full', follow_up_options: [], escalation_cta: 'Talk to our team', escalation_link: '/contact',
    },
    {
        category: 'Services', subcategory: 'Overview',
        keywords: ['services', 'service', 'sap', 'odoo', 'analytics', 'implementation', 'migration'],
        question_patterns: ['what services does sria infotech provide', 'what services do you have', 'what services do you offer', 'tell me about your services', 'services', 'it services'],
        answer: "We provide SAP services (Implementation, Global Rollouts, Application Development, Integration, Support & Maintenance, Upgrades, Migrations, Fiori Development, ABAP RAP Development), Odoo Implementation & Custom App Development, and Data Analytics. Which service are you interested in?",
        link: null, depth: 'full', follow_up_options: [], escalation_cta: 'Talk to our team', escalation_link: '/contact',
    },
    {
        category: 'Solutions', subcategory: 'Overview',
        keywords: ['solutions', 'solution', 'sap', 'erp', 'hxm', 'crm', 'btp', 'analytics', 'cloud'],
        question_patterns: ['what solutions does sria infotech provide', 'what solutions do you have', 'what solutions do you offer', 'tell me about your solutions', 'solutions', 'it solutions', 'it solutions that sria infotech provide'],
        answer: "We deliver SAP solutions across five areas: SAP ERP (S/4HANA Public & Private Cloud, RISE with SAP), SAP HXM (SuccessFactors, Field Service Management, Asset Performance Management, Product Lifecycle), SAP CRM (Business Network, Commerce Cloud, Manufacturing & Logistics, Digital Manufacturing), SAP BTP (Fieldglass, Extended Warehouse Management), and SAP Analytics Cloud (Ariba, Concur, PaPM, Manufacturing Execution). Which area would you like to explore?",
        link: null, depth: 'full', follow_up_options: [], escalation_cta: 'Talk to our team', escalation_link: '/contact',
    },
];

// Mirrors upsertEntry()'s guard in build-kb.js exactly: a manually-edited
// entry never has its answer/keywords/question_patterns touched, only its
// link if the route moved. Everything else about the diff logic is the
// same as before.
function diffDoc(current, wouldBe) {
    if (!current) return { action: 'CREATE', changes: null };

    if (current.editedManually) {
        const changes = [];
        if (wouldBe.link !== undefined && wouldBe.link !== current.link) {
            changes.push({ field: 'link', from: current.link, to: wouldBe.link });
        }
        return { action: changes.length ? 'SKIPPED (manual) — link would still update' : 'SKIPPED (manual, no changes)', changes };
    }

    const changes = [];
    for (const key of ['answer', 'keywords', 'question_patterns', 'depth', 'link', 'escalation_cta', 'escalation_link']) {
        const a = JSON.stringify(current[key]);
        const b = JSON.stringify(wouldBe[key]);
        if (a !== b) changes.push({ field: key, from: current[key], to: wouldBe[key] });
    }
    return { action: changes.length ? 'MODIFY' : 'NO-OP (identical)', changes };
}

async function main() {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/sria_craft';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected (READ-ONLY dry run — no writes will occur)\n');

    let wouldCreate = 0, wouldModify = 0, wouldNoOp = 0, wouldSkip = 0;
    const modifyDetails = [];
    const skipDetails = [];
    const outOfScope = [];
    const needsReview = [];
    const subcategoryByLink = {};

    // 1. Overview entries
    for (const doc of OVERVIEW_ENTRIES) {
        const current = await KBEntry.findOne({ category: doc.category, subcategory: doc.subcategory }).lean();
        const { action, changes } = diffDoc(current, doc);
        console.log(`[${action}] ${doc.category}/${doc.subcategory}`);
        if (action === 'CREATE') wouldCreate++;
        else if (action.startsWith('SKIPPED')) { wouldSkip++; if (changes.length) skipDetails.push({ label: `${doc.category}/${doc.subcategory}`, changes }); }
        else if (action.startsWith('MODIFY')) { wouldModify++; modifyDetails.push({ label: `${doc.category}/${doc.subcategory}`, changes }); }
        else wouldNoOp++;
    }

    // 2. routeMeta-derived entries
    const raw = fs.readFileSync(ROUTE_META_FILE, 'utf8');
    const routes = parseRouteMeta(raw);

    for (const [link, meta] of Object.entries(routes)) {
        const category = categorize(link);
        if (!category) { outOfScope.push(`${link} — not in a KB category`); continue; }
        if (meta.noindex) { needsReview.push(`${link} — placeholder/coming-soon page (noindex)`); continue; }

        const subcategory = SUBCATEGORY_OVERRIDES[link] || subcategoryFromTitle(meta.title);
        subcategoryByLink[link] = subcategory;
        const answer = stripTrailingCta(meta.description);
        if (!answer) { needsReview.push(`${link} — no description text found`); continue; }

        const doc = {
            category, subcategory,
            keywords: extractKeywords(subcategory, answer),
            question_patterns: buildQuestionPatterns(subcategory),
            answer, link,
            depth: computeDepth(answer),
            follow_up_options: [], escalation_cta: 'Talk to our team', escalation_link: '/contact',
        };

        const current = await KBEntry.findOne({ link, subcategory }).lean();
        const { action, changes } = diffDoc(current, doc);
        console.log(`[${action}] ${category}/${subcategory} (${link})`);
        if (action === 'CREATE') wouldCreate++;
        else if (action.startsWith('SKIPPED')) { wouldSkip++; if (changes.length) skipDetails.push({ label: `${category}/${subcategory} (${link})`, changes }); }
        else if (action.startsWith('MODIFY')) { wouldModify++; modifyDetails.push({ label: `${category}/${subcategory} (${link})`, changes }); }
        else wouldNoOp++;
    }

    // 3. FAQ entries
    for (const { file, link } of PRODUCT_FAQ_FILES) {
        const subcategory = subcategoryByLink[link];
        if (!subcategory) { needsReview.push(`${file} — no routeMeta entry found for ${link}`); continue; }
        const filePath = path.join(FRONTEND, file);
        if (!fs.existsSync(filePath)) { needsReview.push(`${file} — file not found`); continue; }
        const src = fs.readFileSync(filePath, 'utf8');
        const faqs = extractFaqs(src);
        if (!faqs.length) { needsReview.push(`${file} — no faqsData parsed`); continue; }

        for (const faq of faqs) {
            const question = faq.question, answer = faq.answer;
            if (!question || !answer) continue;
            const question_patterns = [question];
            const normalized = question.replace(/\?$/, '').toLowerCase();
            if (normalized !== question.toLowerCase()) question_patterns.push(normalized);

            const doc = {
                category: 'Products', subcategory,
                keywords: extractKeywords(`${subcategory} ${question}`, answer),
                question_patterns, answer, link,
                depth: computeDepth(answer),
                follow_up_options: [], escalation_cta: 'Talk to our team', escalation_link: '/contact',
            };

            const current = await KBEntry.findOne({ link, subcategory, 'question_patterns.0': question }).lean();
            const { action, changes } = diffDoc(current, doc);
            console.log(`[${action}] Products/${subcategory} FAQ: "${question.slice(0, 50)}"`);
            if (action === 'CREATE') wouldCreate++;
            else if (action.startsWith('SKIPPED')) { wouldSkip++; if (changes.length) skipDetails.push({ label: `Products/${subcategory} FAQ: "${question.slice(0, 50)}"`, changes }); }
            else if (action.startsWith('MODIFY')) { wouldModify++; modifyDetails.push({ label: `Products/${subcategory} FAQ: "${question.slice(0, 50)}"`, changes }); }
            else wouldNoOp++;
        }
    }

    console.log('\n=== DRY RUN SUMMARY (nothing was written) ===');
    console.log(`Would CREATE: ${wouldCreate}`);
    console.log(`Would MODIFY: ${wouldModify}`);
    console.log(`Would SKIP (manually edited, protected): ${wouldSkip}`);
    console.log(`Would be NO-OP (already identical): ${wouldNoOp}`);
    console.log(`Out of category scope: ${outOfScope.length}`);
    console.log(`Needs manual review / skipped: ${needsReview.length}`);

    if (modifyDetails.length) {
        console.log('\n=== DETAILED CHANGES FOR EACH WOULD-BE MODIFY ===');
        for (const d of modifyDetails) {
            console.log(`\n--- ${d.label} ---`);
            for (const c of d.changes) {
                console.log(`  ${c.field}:`);
                console.log(`    CURRENT (in DB):  ${JSON.stringify(c.from)}`);
                console.log(`    WOULD BECOME:     ${JSON.stringify(c.to)}`);
            }
        }
    }

    if (skipDetails.length) {
        console.log('\n=== SKIPPED ENTRIES WHERE link WOULD STILL UPDATE ===');
        for (const d of skipDetails) {
            console.log(`\n--- ${d.label} ---`);
            for (const c of d.changes) {
                console.log(`  ${c.field}: ${JSON.stringify(c.from)} -> ${JSON.stringify(c.to)}`);
            }
        }
    }

    await mongoose.disconnect();
}

main().catch((err) => {
    console.error('Dry run error:', err);
    mongoose.disconnect().finally(() => process.exit(1));
});
