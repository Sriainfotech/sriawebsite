// Hand-maintained synonym/stopword dictionary used by matcher.js to expand a
// query BEFORE it reaches Fuse — it never touches KB content, only what the
// incoming message looks like once normalized.
//
// Format: term -> [variants]
//   - Non-empty array: a synonym group. If the (normalized) query contains
//     the key OR any of its variants, every other term in the group that
//     isn't already present gets appended to the query. This only adds
//     vocabulary — it never removes anything — so the original phrasing is
//     always still searchable too.
//   - Empty array ([]): a stopword. The term is stripped from the query
//     outright instead of expanded — for filler words/phrases that add
//     conversational noise but no matching signal (e.g. "guys").
//
// Keys/variants may be multi-word phrases ("get in touch", "work with") —
// matcher.js matches them as whole phrases, not by splitting into words.
module.exports = {
    // --- Casual filler / stopwords ---
    guys: [],
    'you guys': [],
    please: [],
    'kind of': [],
    'sort of': [],
    just: [],
    um: [],
    uh: [],

    // --- Seeded from the real smoke-test gaps (#2, #4, #13, #16, #17) ---

    // #4 "how do i get in touch with someone" — fell back because nothing in
    // the query literally says "contact".
    'get in touch': ['contact', 'reach', 'talk to'],
    contact: ['reach', 'get in touch', 'talk to'],
    reach: ['contact', 'get in touch', 'talk to'],
    'talk to': ['contact', 'reach', 'get in touch'],

    // #16 "do you guys work with odoo" — "work with" doesn't overlap with how
    // the Odoo service entries phrase things (support/integration/implementation).
    'work with': ['support', 'integrate with', 'use'],
    support: ['work with', 'help with', 'assist'],
    'integrate with': ['work with', 'connect to', 'integration'],

    // #17 "can you build custom software for us" — need-phrased; the visitor
    // doesn't know to say "Odoo Custom Development Services".
    build: ['develop', 'create', 'make'],
    develop: ['build', 'create', 'make'],
    'custom software': ['custom development', 'custom app', 'bespoke software'],

    // #13 "we need something to automate invoice processing, what do you have"
    // — need-phrased; the visitor doesn't know the product name "Auto Extract".
    automate: ['automation', 'auto extract', 'extraction'],
    automation: ['automate', 'auto extract', 'extraction'],
    'invoice processing': ['auto extract', 'document extraction', 'data extraction'],

    // #2 "who are you guys" — "guys" is stripped above by the stopword entry;
    // the remaining "who are you" overlaps with About/Overview's own 'who'
    // keyword, so no dedicated synonym group was needed for this one — see
    // the before/after scores for confirmation either way.

    // "any job openings right now" — was false-positive-matching Office
    // Locations: the short generic word "any" fuzzy-matches it by coincidence
    // (score ~0.003) in the tier2 per-word retry, and nothing in the query
    // otherwise overlapped with the Careers entry's own vocabulary (its
    // keywords are careers/career/sap/odoo/digital/transformation — no
    // "job"/"opening"/"hiring" at all). Appending "careers" here gives the
    // tier2 retry a near-exact keyword hit that outscores "any"'s coincidence
    // outright — confirmed via before/after scoring, not just added on spec.
    job: ['jobs', 'opening', 'openings', 'hiring', 'vacancy', 'vacancies', 'careers'],
    jobs: ['job', 'opening', 'openings', 'hiring', 'vacancy', 'vacancies', 'careers'],
    opening: ['job', 'jobs', 'openings', 'hiring', 'vacancy', 'vacancies', 'careers'],
    openings: ['job', 'jobs', 'opening', 'hiring', 'vacancy', 'vacancies', 'careers'],
    hiring: ['job', 'jobs', 'opening', 'openings', 'vacancy', 'vacancies', 'careers'],
    vacancy: ['job', 'jobs', 'opening', 'openings', 'hiring', 'vacancies', 'careers'],
    vacancies: ['job', 'jobs', 'opening', 'openings', 'hiring', 'vacancy', 'careers'],
    careers: ['job', 'jobs', 'opening', 'openings', 'hiring', 'vacancy', 'vacancies'],

    // --- General business/product vocabulary (not tied to a specific gap) ---
    cost: ['pricing', 'price', 'fees', 'charges'],
    pricing: ['cost', 'price', 'fees', 'charges'],
    price: ['cost', 'pricing', 'fees'],
    charges: ['cost', 'pricing', 'fees'],
    cheap: ['affordable', 'budget'],
    affordable: ['cheap', 'budget'],
    help: ['support', 'assist'],
    company: ['business', 'organization', 'firm'],
    business: ['company', 'organization', 'firm'],
    product: ['solution', 'tool', 'software'],
    solution: ['product', 'tool', 'software'],
    team: ['staff', 'people', 'consultants'],
    start: ['begin', 'get started', 'onboard'],
    demo: ['walkthrough', 'trial', 'preview'],
    integration: ['integrate', 'connect', 'link'],
};
