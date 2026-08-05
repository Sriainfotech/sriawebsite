// Standalone smoke test for chatbot/sessionStore.js. Run with:
//   node scripts/test-sessionstore.js
// No MongoDB involved — sessionStore is pure in-memory, so this just exercises
// the module's functions directly and prints what happens at each step.

const {
    getSession,
    updateSession,
    clearSession,
    _setUpdatedAtForTesting,
} = require('../chatbot/sessionStore');

const SESSION_ID = 'test-session-1';

function log(label, value) {
    console.log(`\n--- ${label} ---`);
    console.log(value);
}

function main() {
    // 1. Create a session.
    const created = updateSession(SESSION_ID, {
        entryId: 'kb-entry-abc',
        topic: 'gatecheck',
        category: 'Products',
    });
    log('Created session', created);

    // 2. Read it back.
    log('Read after create', getSession(SESSION_ID));

    // 3. Update just the topic/category, leaving lastEntryId untouched.
    const updated = updateSession(SESSION_ID, {
        topic: 'gatecheck pricing',
        category: 'Products',
    });
    log('Updated session', updated);
    log('Read after update', getSession(SESSION_ID));

    // 4. Expiry: backdate updatedAt past the 30-minute TTL and confirm
    // getSession() treats it as gone rather than returning stale context.
    const THIRTY_ONE_MINUTES_AGO = new Date(Date.now() - 31 * 60 * 1000);
    _setUpdatedAtForTesting(SESSION_ID, THIRTY_ONE_MINUTES_AGO);
    log('Read after backdating updatedAt by 31 minutes (expect null)', getSession(SESSION_ID));

    // Recreating under the same sessionId should work normally — expiry only
    // ever removes the entry, it doesn't poison the key.
    const recreated = updateSession(SESSION_ID, { topic: 'fresh-topic' });
    log('Read after recreating the same sessionId', getSession(SESSION_ID));

    // 5. clearSession explicitly removes a session on demand.
    clearSession(SESSION_ID);
    log('Read after clearSession (expect null)', getSession(SESSION_ID));

    // A session that was never created should also just be null, not throw.
    log('Read for a sessionId that never existed (expect null)', getSession('never-created'));
}

main();
