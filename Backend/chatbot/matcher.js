const Fuse = require('fuse.js');
const KBEntry = require('../models/KBEntry');

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

// Loads every KBEntry from MongoDB and (re)builds the in-memory Fuse index.
// Called once on module load and exposed as refreshIndex() so callers can
// re-run it after KB updates without restarting the process.
async function buildIndex() {
    const entries = await KBEntry.find({}).lean();
    fuse = new Fuse(entries, FUSE_OPTIONS);
    return fuse;
}

async function refreshIndex() {
    return buildIndex();
}

// Runs a single normalized query through the current index and returns the
// best Fuse hit ({ item, score }) or null if nothing was returned at all.
function search(normalizedMessage) {
    if (!fuse) return null;
    const results = fuse.search(normalizedMessage);
    return results.length ? results[0] : null;
}

function passesThreshold(hit) {
    return !!hit && typeof hit.score === 'number' && hit.score <= CONFIDENCE_THRESHOLD;
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

    const directHit = search(normalized);
    if (passesThreshold(directHit)) {
        return {
            entry: directHit.item,
            confidence: 1 - directHit.score,
            usedContext: false,
            isFallback: false,
        };
    }

    const lastTopic = sessionContext && sessionContext.lastTopic;
    if (lastTopic) {
        const merged = normalize(`${normalized} ${lastTopic}`);
        const contextHit = search(merged);
        if (passesThreshold(contextHit)) {
            return {
                entry: contextHit.item,
                confidence: 1 - contextHit.score,
                usedContext: true,
                isFallback: false,
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
};
