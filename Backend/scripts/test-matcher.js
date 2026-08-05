// Standalone smoke test for chatbot/matcher.js. Run with:
//   node scripts/test-matcher.js
// Connects to Mongo, rebuilds the Fuse index, and prints matchQuery() output
// for a handful of representative inputs so the matching logic can be sanity
// checked before it's wired into any real request flow.

require('dotenv').config();
const mongoose = require('mongoose');
const { matchQuery, refreshIndex } = require('../chatbot/matcher');

const CASES = [
    {
        label: 'Clear match',
        input: { message: 'What is GateCheck?' },
    },
    {
        label: 'Fuzzy / typo match',
        input: { message: 'wht is gatchek' },
    },
    {
        label: 'Follow-up using sessionContext.lastTopic',
        input: {
            message: 'what about pricing',
            sessionContext: { lastTopic: 'gatecheck' },
        },
    },
    {
        label: 'Total nonsense query',
        input: { message: 'purple giraffe spreadsheet quantum' },
    },
];

function printResult(label, input, result) {
    console.log(`\n--- ${label} ---`);
    console.log('input:', JSON.stringify(input));
    if (result.isFallback) {
        console.log('isFallback: true');
        console.log('message:', result.message);
        console.log('escalation_link:', result.escalation_link);
        return;
    }
    console.log('isFallback: false');
    console.log('usedContext:', result.usedContext);
    console.log('confidence:', result.confidence.toFixed(3));
    console.log('matched link:', result.entry.link);
    console.log('matched subcategory:', result.entry.subcategory);
    console.log('answer:', result.entry.answer);
}

async function main() {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/sria_craft';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');

    await refreshIndex();
    console.log('Fuse index built');

    for (const { label, input } of CASES) {
        const result = await matchQuery(input);
        printResult(label, input, result);
    }

    await mongoose.disconnect();
    console.log('\nMongoDB connection closed.');
}

main().catch((err) => {
    console.error('Fatal error running matcher test:', err);
    mongoose.disconnect().finally(() => process.exit(1));
});
