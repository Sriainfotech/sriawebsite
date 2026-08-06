const Fuse = require('fuse.js');
const BM25 = require('okapibm25').default;
const KBEntry = require('../models/KBEntry');
const SYNONYMS = require('./synonyms');

// Below this Fuse score (lower = better match), we trust the top hit outright.
// This is the real accept/reject gate — tune this, not FUSE_OPTIONS.threshold,
// when adjusting how strict matching feels.
const CONFIDENCE_THRESHOLD = 0.4;

const FUSE_OPTIONS = {
    includeScore: true,
    // Fuse's `threshold` isn't just a post-filter on the score — it also caps
    // how many edits its underlying fuzzy-search algorithm will explore, so a
    // tight value here can make Fuse fail to find the best alignment at all
    // (and report a worse score) rather than just refusing to return it. Keep
    // this loose so Fuse can find the true best match, and enforce the real
    // accept/reject decision via CONFIDENCE_THRESHOLD above instead.
    threshold: 0.6,
    // Keywords/patterns are short, unordered phrases, not prose with a
    // meaningful position for the query term — ignore location so "sap" and
    // "sap upgrade services" both match "upgrade" equally well.
    ignoreLocation: true,
    // Ask short questions, so let a single query word find its match even in
    // a longer question_pattern string.
    minMatchCharLength: 2,
    keys: [
        // question_patterns is closer to how a user actually phrases things
        // ("what is gatecheck"), so it should outweigh raw keywords when both
        // fire on the same entry.
        { name: 'question_patterns', weight: 0.7 },
        { name: 'keywords', weight: 0.3 },
    ],
};

const FALLBACK_MESSAGE =
    "I don't have specific information on that — would you like to talk to our team?";
const FALLBACK_LINK = '/contact';

let fuse = null;

// --- BM25 (second scoring signal, added alongside Fuse — see matchQuery()) ---
//
// Why BM25 alongside Fuse, and why this library: Fuse's Bitap fuzzy matcher
// scores on edit-distance closeness of the WHOLE query string (or a single
// retried word — see searchWords()/searchWordsFiltered() above), so a real
// keyword buried in a long, rambling, unfamiliar-phrasing query can get
// diluted or simply never surface if it isn't the word the word-retry
// tie-break happens to pick. BM25 scores by term overlap weighted by inverse
// document frequency across the WHOLE corpus, so a rare, on-topic word
// contributes strongly to its true entry's score regardless of how much
// unrelated filler surrounds it in the query — structurally the right tool
// for "important word buried among noise" (see matchQuery() below for how
// this is actually combined with Fuse, and why).
//
// Picked `okapibm25` over `wink-bm25-text-search`: this corpus is ~85 tiny
// documents rebuilt from scratch on every buildIndex() call (same lifecycle
// Fuse already has), so there's no need for wink's persistent/incremental
// index (add/consolidate workflow) or its own tokenizer — that pulls in
// wink-nlp + wink-nlp-utils + a full wink-eng-lite-web-model language model
// as dependencies for a problem this small. okapibm25 is a single pure
// function — `BM25(documents, queryTokens, {k1, b})` — with zero
// dependencies, which fits the codebase's existing preference for small,
// inspectable implementations over heavier NLP dependencies (see the
// hand-rolled stemmer comment above). We already do our own
// normalize/stem/tokenize; okapibm25 just needs strings in and gives scores
// out, which is exactly the shape needed to reuse that existing pipeline.
const BM25_CONSTANTS = { k1: 1.2, b: 0.75 }; // library defaults, stated explicitly rather than left implicit

// Corpus fields: question_patterns + keywords (like Fuse), PLUS the answer
// text (unlike Fuse, which never indexes answer prose). Fuse's own keys
// deliberately exclude answer text — full paragraphs dilute Bitap's
// whole-string scoring. BM25 doesn't have that failure mode (IDF already
// discounts common words), and the answer is often the ONLY place a
// relevant word lives before it's been promoted to a curated keyword/pattern
// (e.g. "spreadsheets" appears in Auto Extract's answer but not its
// keywords) — including it is what lets BM25 catch a buried word Fuse
// structurally can't see at all. question_patterns/keywords are repeated
// (see PATTERN_REPEAT/KEYWORD_REPEAT) to approximate Fuse's 0.7/0.3 key
// weighting, since okapibm25's plain document-string API has no native
// per-field weight — repetition inflates term frequency for those fields
// the same directional way a real field weight would, without needing a
// fork or a heavier library with multi-field support.
const PATTERN_REPEAT = 2;
const KEYWORD_REPEAT = 2;

// Gate for trusting a BM25 hit — deliberately NOT a mirror of Fuse's
// CONFIDENCE_THRESHOLD, because raw BM25 scores on this corpus don't sit on
// a comparable fixed scale (measured: a genuine single-keyword match like
// "whats gatecheck" scores ~4.6, while a 4-word NONSENSE query
// ("purple giraffe spreadsheet quantum") scores ~4.5 too, purely because one
// of its words ("spreadsheet") coincidentally, genuinely appears in one
// entry's answer text — an absolute-score-only cutoff cannot tell these
// apart). What DOES separate them, measured against this corpus: what
// fraction of the query's own (stemmed, stopword-filtered) tokens actually
// appear in the winning document at all — "coverage". Genuine multi-word
// matches cover most/all of their tokens (#13 "automate invoice processing":
// 0.60; #4 "get in touch...": 1.00); the nonsense case covers only 1 of its
// 4 tokens (0.25). BM25_MIN_SCORE stays only as a low sanity floor — the
// real gate is coverage.
const BM25_MIN_COVERAGE = 0.5;
const BM25_MIN_SCORE = 3;

let bm25Corpus = null; // string[], one per indexed entry, same order as bm25Entries
let bm25Entries = null; // same array Fuse indexes (see buildIndex()) — keeps `entry` identical either way

function bm25DocText(indexedEntry) {
    // question_patterns/keywords on `indexedEntry` are already normalize()+stemText()'d
    // by buildIndex() (same fields Fuse indexes) — reused as-is, not re-derived.
    const patterns = indexedEntry.question_patterns.join(' ');
    const keywords = indexedEntry.keywords.join(' ');
    const answer = stemText(normalize(indexedEntry.answer || ''));
    const parts = [];
    for (let i = 0; i < PATTERN_REPEAT; i++) parts.push(patterns);
    for (let i = 0; i < KEYWORD_REPEAT; i++) parts.push(keywords);
    parts.push(answer);
    return parts.join(' ').trim();
}

// Same GENERIC_STOPWORDS set used below by searchWordsFiltered() (defined
// further down this file) is reused here too — declared once, used by both,
// see the set's own comment for what it's for and why "guys" isn't in it
// (that's synonyms.js's job, not this list's).
function bm25QueryTokens(text) {
    return [...new Set(text.split(' ').filter(Boolean))].filter(
        (w) => w.length >= FUSE_OPTIONS.minMatchCharLength && !GENERIC_STOPWORDS.has(w),
    );
}

// Runs BM25 over the whole corpus for the given (already stemmed) query
// tokens and returns the top hit plus its coverage — or null if there are no
// usable tokens or no corpus yet.
function bm25Search(tokens) {
    if (!bm25Corpus || !bm25Corpus.length || !tokens.length) return null;
    const scores = BM25(bm25Corpus, tokens, BM25_CONSTANTS);
    let bestIdx = -1;
    let bestScore = -Infinity;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > bestScore) {
            bestScore = scores[i];
            bestIdx = i;
        }
    }
    if (bestIdx === -1 || !Number.isFinite(bestScore)) return null;
    const winningText = bm25Corpus[bestIdx];
    const covered = tokens.filter((t) => winningText.includes(t));
    return {
        item: bm25Entries[bestIdx],
        score: bestScore,
        coverage: covered.length / tokens.length,
    };
}

function passesBm25Gate(hit) {
    return !!hit && hit.score >= BM25_MIN_SCORE && hit.coverage >= BM25_MIN_COVERAGE;
}

// Strip punctuation and collapse whitespace so "What's GateCheck??" and
// "whats gatecheck" normalize to comparable strings before they ever reach
// Fuse (Fuse's own fuzziness handles typos, not stray punctuation).
function normalize(message) {
    return String(message || '')
        .toLowerCase()
        .trim()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function containsPhrase(text, phrase) {
    return new RegExp(`\\b${escapeRegex(phrase)}\\b`).test(text);
}

// Query preprocessing layer — runs BEFORE Fuse, on top of normalize(), and
// never touches KB content. Two passes:
//
// 1. Synonym expansion (see synonyms.js): if the query contains a dictionary
//    key or any of its variants, every other term in that group gets
//    appended (additive — the original wording always stays searchable
//    too). Empty-array entries are stopwords and get stripped instead.
// 2. Stemming: reduces each remaining word to a shared root (see stemWord())
//    so "pricing"/"priced"/"prices" line up as the same token. Applied here
//    to the query, and separately to each entry's keywords/question_patterns
//    at index-build time (see buildIndex()), so both sides of the comparison
//    are stemmed the same way.
//
// Order matters: synonym expansion runs on whole, unstemmed phrases (e.g.
// "get in touch") because stemming individual words first would break
// multi-word phrase matching; stemming runs last, after expansion, so the
// appended synonym terms get stemmed too.
function expandSynonyms(normalizedMessage) {
    let text = normalizedMessage;
    const toAppend = new Set();

    for (const [key, variants] of Object.entries(SYNONYMS)) {
        if (variants.length === 0) {
            // Stopword: strip every occurrence of this term outright.
            if (containsPhrase(text, key)) {
                text = text.replace(new RegExp(`\\b${escapeRegex(key)}\\b`, 'g'), ' ');
            }
            continue;
        }
        const group = [key, ...variants];
        const present = group.some((term) => containsPhrase(text, term));
        if (!present) continue;
        for (const term of group) {
            if (!containsPhrase(text, term)) toAppend.add(term);
        }
    }

    if (toAppend.size) {
        text = `${text} ${[...toAppend].join(' ')}`;
    }
    return text.replace(/\s+/g, ' ').trim();
}

// Lightweight rule-based stemmer, hand-rolled rather than pulling in
// "stemmer"/"porter-stemmer": this only needs to unify a bounded set of
// predictable business-vocabulary suffix patterns (pricing/priced/prices,
// integration/integrations/integrate, development/developing/developed),
// not general-purpose linguistic stemming — a small suffix-stripping table
// is easy to reason about and test against this KB's actual vocabulary,
// consistent with how this codebase already prefers small hand-rolled rules
// over new NLP/parser dependencies for bounded text transforms (see
// stripTrailingCta/extractKeywords in build-kb.js). Applied iteratively so
// multi-suffix words (e.g. "developments") fully reduce to the same root as
// their base form ("develop"), and words <= 3 chars are left alone so short
// acronyms (SAP, CRM, ERP) are never mangled.
const STEM_RULES = [
    [/ies$/, 'i'],
    [/ing$/, ''],
    [/ations$/, 'ate'],
    [/ation$/, 'ate'],
    [/ment$/, ''],
    [/ed$/, ''],
    [/es$/, ''],
    [/s$/, ''],
];
const STEM_MAX_PASSES = 6;

function stemWord(word) {
    if (word.length <= 3) return word;
    let w = word;
    for (let pass = 0; pass < STEM_MAX_PASSES; pass++) {
        let changed = false;
        for (const [re, repl] of STEM_RULES) {
            if (re.test(w)) {
                const next = w.replace(re, repl);
                if (next !== w && next.length >= 2) {
                    w = next;
                    changed = true;
                }
                break; // only the first matching rule per pass
            }
        }
        if (!changed) break;
    }
    if (w.length > 4 && w.endsWith('e')) w = w.slice(0, -1);
    return w;
}

function stemText(text) {
    return text
        .split(' ')
        .filter(Boolean)
        .map(stemWord)
        .join(' ');
}

// Two preprocessing tiers, tried in order by search() below rather than
// always combined into one string. Synonym expansion is additive by design
// (see expandSynonyms() above), but "additive" isn't free with Fuse: a query
// that already scores a perfect 0.0000 on its own (e.g. "what is the
// pricing" against a "what is the pricing" pattern) gets WORSE once extra
// appended terms ("cost price fees charges") change the string Fuse actually
// matches against — measured regression during testing, see build notes.
// So expansion is only tried as a fallback after the plain-stemmed query
// fails the confidence threshold, never unconditionally combined with it.
function stemOnly(normalizedMessage) {
    return stemText(normalizedMessage);
}
function stemExpanded(normalizedMessage) {
    return stemText(expandSynonyms(normalizedMessage));
}

// Stems every question_patterns/keywords entry so the Fuse index is
// comparable against preprocessQuery()'s stemmed query text. This is an
// in-memory transform of the array returned by KBEntry.find().lean() only —
// it never writes back to Mongo, so KB content on disk is untouched. Every
// other field (answer, link, follow_up_options, escalation_*, _id, etc.) is
// passed through unmodified, since only question_patterns/keywords are ever
// used as Fuse search keys.
function stemEntryFields(values) {
    return (values || []).map((v) => stemText(normalize(v)));
}

// Loads every KBEntry from MongoDB and (re)builds the in-memory Fuse index.
// Called once on module load and exposed as refreshIndex() so callers can
// re-run it after KB updates without restarting the process.
async function buildIndex() {
    const entries = await KBEntry.find({}).lean();
    const indexed = entries.map((entry) => ({
        ...entry,
        question_patterns: stemEntryFields(entry.question_patterns),
        keywords: stemEntryFields(entry.keywords),
    }));
    fuse = new Fuse(indexed, FUSE_OPTIONS);

    // BM25 corpus is built from the SAME `indexed` array/objects Fuse just
    // indexed (not a second copy re-derived from `entries`) — so a BM25 hit's
    // `.item` is reference-identical in shape to a Fuse hit's `.item`, and
    // question_patterns/keywords are stemmed exactly once, not twice.
    bm25Entries = indexed;
    bm25Corpus = indexed.map(bm25DocText);

    return fuse;
}

async function refreshIndex() {
    return buildIndex();
}

// Fuse's Bitap matcher only evaluates the query in 32-character chunks and
// averages the score across every chunk it produces. For a genuine wall of
// text (hundreds of words) that dilutes a real keyword's score into oblivion,
// which is what this retry exists to recover from. But ordinary questions —
// even fairly long or awkwardly-paraphrased ones — regularly run past 32
// characters too, and the word-by-word retry below is far more prone to
// coincidental false positives (generic words fuzzy-matching an unrelated
// entry) than the whole-phrase match is. So this only kicks in well past any
// realistic single-sentence question, leaving normal questions on the
// whole-phrase path even when they end up falling back.
const LONG_QUERY_RETRY_LENGTH = 150;

// Retries a long, failed query word-by-word so a keyword buried in
// surrounding text can still surface its own strong match.
function searchWords(normalizedMessage) {
    const words = [...new Set(normalizedMessage.split(' '))].filter(
        (w) => w.length >= FUSE_OPTIONS.minMatchCharLength,
    );
    let best = null;
    let bestAdjustedScore = Infinity;
    for (const word of words) {
        const results = fuse.search(word);
        const hit = results.length ? results[0] : null;
        if (!hit) continue;
        // Short filler words ("is", "what", "in"...) are often literal
        // substrings of a question_pattern ("what is gatecheck") and score a
        // coincidental 0, tying with the actual keyword. Nudge longer words
        // ahead since they're inherently rarer/more specific — the bonus is
        // small enough to never flip a genuinely worse match ahead of a
        // genuinely better one, only to break near-ties between them.
        const adjustedScore = hit.score - word.length * 0.001;
        if (adjustedScore < bestAdjustedScore) {
            bestAdjustedScore = adjustedScore;
            best = hit;
        }
    }
    return best;
}

// Generic English connective words — distinct from synonyms.js's business
// stopwords ("guys" etc). synonyms.js strips words that add conversational
// noise to the QUERY itself; this list exists only to keep the word-by-word
// retry below from being won by a coincidental fuzzy/exact hit on a common
// word that happens to be a literal substring of some entry's own patterns
// (nearly every entry's patterns are English sentences, so short connective
// words routinely score a false 0.000 against some unrelated entry). Content
// words are never included here even if short and frequent in this domain
// (e.g. "odoo", "sap") — only words with no topical meaning of their own.
const GENERIC_STOPWORDS = new Set([
    'a', 'an', 'the', 'is', 'are', 'am', 'be', 'been', 'being', 'do', 'does',
    'doing', 'did', 'to', 'of', 'in', 'on', 'at', 'for', 'with', 'how', 'can',
    'could', 'would', 'should', 'we', 'us', 'i', 'you', 'your', 'yours',
    'this', 'that', 'these', 'those', 'it', 'its', 'have', 'has', 'had',
    'having', 'what', 'who', 'whom', 'whose', 'which', 'when', 'where',
    'why', 'and', 'or', 'but', 'so', 'if', 'then', 'there', 'here', 'from',
    'by', 'as', 'not', 'no', 'yes',
]);

// Words that empirically win the word-retry tie-break for the wrong reason:
// each is a single common word that happens to be a literal (post-stem)
// keyword on exactly one KB entry it has no real business connection to —
// auto-extracted from that entry's title/description by build-kb.js's
// extractKeywords(), not curated. When one of these ties at score 0.0000
// against a genuinely relevant word (e.g. "work" vs "odoo" for "do you work
// with odoo"), the longer-word tie-break above picks it purely because it's
// longer, not because it's more relevant — confirmed by testing:
//   - work     -> About/Culture & Life at Sria Infotech (1 entry, generic)
//   - solution -> Solutions/Overview (12 entries, but wins ties it has no
//                 business winning, e.g. "can you build custom software")
//   - integrat -> ties across 7 unrelated entries (Auto Extract, GateCheck,
//                 NxDesk, ...) purely because "integrated" appears in all
//                 of their FAQ text
//   - support, connect -> generic verbs, 13 and 2 entries respectively,
//                 same tie-break problem
//   - develop, app, product -> generic auto-extracted keywords with the same
//                 issue (SAP Fiori Development Services / App Store /
//                 Products Overview all won ties they had no business
//                 winning)
// Removing the top tie promotes the next-longest generic tie, which is why
// this list ended up larger than any single word — each entry here was
// confirmed necessary by re-running the failing queries after excluding it.
// "custom", "odoo", "extract"/"extraction" etc. are deliberately NOT here:
// each only ties on entries it's actually topically related to.
const OVERGENERIC_TIER2_WORDS = new Set([
    'work', 'solution', 'integrat', 'support', 'connect', 'develop', 'app', 'product',
]);

// Same word-by-word idea as searchWords() above, but used for the
// synonym-expanded retry tier (see stemExpanded()/matchQuery() below)
// instead of the long-query tier. Expansion appends several extra terms to
// a short query, and running that whole longer string through one Bitap
// pass (like the plain tier does) measurably dilutes an otherwise-clean
// match — see the "pricing" regression in build notes. Splitting word-by-
// word avoids that dilution, but only once GENERIC_STOPWORDS is filtered
// out first: without it, connective words ("with", "do", "how"...) — which
// are literal substrings of nearly every entry's own patterns — routinely
// out-score the actual synonym term Fuse was supposed to rescue.
function searchWordsFiltered(normalizedMessage) {
    const words = [...new Set(normalizedMessage.split(' '))].filter(
        (w) => w.length >= FUSE_OPTIONS.minMatchCharLength
            && !GENERIC_STOPWORDS.has(w)
            && !OVERGENERIC_TIER2_WORDS.has(w),
    );
    let best = null;
    let bestAdjustedScore = Infinity;
    for (const word of words) {
        const results = fuse.search(word);
        const hit = results.length ? results[0] : null;
        if (!hit) continue;
        const adjustedScore = hit.score - word.length * 0.001;
        if (adjustedScore < bestAdjustedScore) {
            bestAdjustedScore = adjustedScore;
            best = hit;
        }
    }
    return best;
}

// Runs a single normalized query through the current index and returns the
// best Fuse hit ({ item, score }) or null if nothing was returned at all.
function search(normalizedMessage) {
    if (!fuse) return null;
    const results = fuse.search(normalizedMessage);
    let hit = results.length ? results[0] : null;

    if (normalizedMessage.length > LONG_QUERY_RETRY_LENGTH && !passesThreshold(hit)) {
        const wordHit = searchWords(normalizedMessage);
        if (wordHit && (!hit || wordHit.score < hit.score)) hit = wordHit;
    }

    return hit;
}

function passesThreshold(hit) {
    return !!hit && typeof hit.score === 'number' && hit.score <= CONFIDENCE_THRESHOLD;
}

// Deliberately stricter than CONFIDENCE_THRESHOLD (not a replacement for it —
// that constant is untouched). A single word scoring 0.0000-ish against some
// entry is trustworthy when it's a real, near-exact vocabulary hit; the same
// word scoring anywhere in CONFIDENCE_THRESHOLD's normal 0-0.4 range is not,
// because Fuse's per-word fuzzy search has a much higher false-positive rate
// than whole-phrase search does (a single random word only needs to be
// edit-distance-close to ONE short keyword anywhere in the whole KB to score
// low — measured false positive: "purple giraffe spreadsheet quantum" scored
// 0.0809 against Products/Overview with no synonym/business relevance at
// all). Gating the word-retry tier at this tighter cutoff keeps its real win
// (#13's "extraction" at 0.0000) while rejecting that class of coincidence.
const TIER2_WORD_SCORE_CUTOFF = 0.02;
function passesTier2Threshold(hit) {
    return !!hit && typeof hit.score === 'number' && hit.score <= TIER2_WORD_SCORE_CUTOFF;
}

function fallbackResult() {
    return {
        entry: null,
        confidence: 0,
        usedContext: false,
        isFallback: true,
        message: FALLBACK_MESSAGE,
        escalation_link: FALLBACK_LINK,
    };
}

// entry: the matched KBEntry (or null for a fallback)
// confidence: 0-1, higher is better (inverted from Fuse's score, where lower is better)
// usedContext: true if the match only succeeded after merging sessionContext.lastTopic in
// isFallback: true if nothing cleared the confidence threshold, even with context
async function matchQuery({ message, sessionContext } = {}) {
    if (!fuse) {
        await buildIndex();
    }

    const normalized = normalize(message);
    if (!normalized) {
        return fallbackResult();
    }

    const directHit = search(stemOnly(normalized));
    if (passesThreshold(directHit)) {
        return {
            entry: directHit.item,
            confidence: 1 - directHit.score,
            usedContext: false,
            isFallback: false,
            matchedVia: 'fuse',
        };
    }
    // Stemmed-alone missed — retry with synonym expansion for the
    // vocabulary-gap case ("get in touch" / "work with odoo" / etc.) that
    // stemming can't fix on its own. Word-by-word (not whole-string) because
    // the appended synonym terms dilute a whole-string Bitap score — see
    // searchWordsFiltered() above.
    const expandedHit = searchWordsFiltered(stemExpanded(normalized));
    if (passesTier2Threshold(expandedHit)) {
        return {
            entry: expandedHit.item,
            confidence: 1 - expandedHit.score,
            usedContext: false,
            isFallback: false,
            matchedVia: 'fuse',
        };
    }
    // Both of Fuse's own tiers missed — try BM25 before giving up or falling
    // back to session context. Deliberately positioned AFTER both Fuse tiers,
    // never before: measured during calibration that BM25 alone disagrees
    // with Fuse on at least one currently-passing query (#16 "do you guys
    // work with odoo" — Fuse's tier2 correctly resolves this via the
    // "work with" synonym group, while BM25 alone ranks an unrelated entry
    // higher). Comparing the two signals' scores directly isn't safe because
    // they're on different, not-directly-comparable scales — so rather than
    // "take whichever score is higher" for every query, BM25 only ever gets
    // to answer when Fuse has nothing: it can rescue a query Fuse would
    // otherwise drop, but it can never outvote a Fuse tier that already
    // succeeded. See BM25_MIN_COVERAGE's comment for why coverage (not raw
    // score) is the real accept/reject gate here.
    const bm25Hit = bm25Search(bm25QueryTokens(stemExpanded(normalized)));
    if (passesBm25Gate(bm25Hit)) {
        return {
            entry: bm25Hit.item,
            confidence: bm25Hit.coverage,
            usedContext: false,
            isFallback: false,
            matchedVia: 'bm25',
        };
    }

    const lastTopic = sessionContext && sessionContext.lastTopic;
    if (lastTopic) {
        const mergedNormalized = normalize(`${normalized} ${lastTopic}`);
        const contextHit = search(stemOnly(mergedNormalized));
        if (passesThreshold(contextHit)) {
            return {
                entry: contextHit.item,
                confidence: 1 - contextHit.score,
                usedContext: true,
                isFallback: false,
                matchedVia: 'fuse',
            };
        }
        const contextExpandedHit = searchWordsFiltered(stemExpanded(mergedNormalized));
        if (passesTier2Threshold(contextExpandedHit)) {
            return {
                entry: contextExpandedHit.item,
                confidence: 1 - contextExpandedHit.score,
                usedContext: true,
                isFallback: false,
                matchedVia: 'fuse',
            };
        }
        // Same BM25 rescue, one more time, against the context-merged query —
        // same reasoning and same gate as the no-context attempt above.
        const contextBm25Hit = bm25Search(bm25QueryTokens(stemExpanded(mergedNormalized)));
        if (passesBm25Gate(contextBm25Hit)) {
            return {
                entry: contextBm25Hit.item,
                confidence: contextBm25Hit.coverage,
                usedContext: true,
                isFallback: false,
                matchedVia: 'bm25',
            };
        }
    }

    return fallbackResult();
}

// Build the index eagerly on first require so the first real matchQuery()
// call doesn't pay the DB round-trip. matchQuery() also self-heals (builds
// the index lazily) if this fails or hasn't resolved yet, e.g. in tests that
// import the module before Mongo is connected.
buildIndex().catch((err) => {
    console.error('matcher.js: initial index build failed:', err.message);
});

module.exports = {
    matchQuery,
    refreshIndex,
    normalize,
    FALLBACK_LINK,
};
