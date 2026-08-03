// In-memory session store for chatbot follow-up context. This is transient
// per-conversation state (which topic/entry a user was just looking at), not
// persisted data, so a plain Map is enough — no MongoDB involved, and nothing
// here survives a server restart. That's fine because sessions are only used
// to resolve short-lived follow-ups (see matcher.js's sessionContext.lastTopic
// retry logic), not to reconstruct chat history.

const sessions = new Map();

// Sessions untouched for longer than this are treated as stale and dropped —
// a follow-up after 30+ minutes of silence is more likely a new topic than a
// continuation of the old one.
const SESSION_TTL_MS = 30 * 60 * 1000;

// How often the sweep below scans for expired sessions and removes them, so
// the Map doesn't grow unbounded over a long-running server process. This is
// just housekeeping — getSession() already refuses to return expired entries
// on its own, so correctness never depends on the sweep having run yet.
const SWEEP_INTERVAL_MS = 5 * 60 * 1000;

function isExpired(session) {
    return Date.now() - session.updatedAt.getTime() > SESSION_TTL_MS;
}

// Returns the session object for sessionId, or null if it doesn't exist or
// has expired. An expired session is deleted immediately on read so it
// doesn't get handed back as stale context even if the sweep hasn't run yet.
function getSession(sessionId) {
    const session = sessions.get(sessionId);
    if (!session) return null;
    if (isExpired(session)) {
        sessions.delete(sessionId);
        return null;
    }
    return session;
}

// Creates the session if it doesn't exist, or merges the given fields into
// the existing one. Any field left undefined keeps its previous value.
// updatedAt is always refreshed, which also resets the expiry clock.
function updateSession(sessionId, { entryId, topic, category } = {}) {
    const existing = sessions.get(sessionId);
    const session = existing || {
        lastEntryId: null,
        lastTopic: null,
        lastCategory: null,
        updatedAt: null,
    };

    if (entryId !== undefined) session.lastEntryId = entryId;
    if (topic !== undefined) session.lastTopic = topic;
    if (category !== undefined) session.lastCategory = category;
    session.updatedAt = new Date();

    sessions.set(sessionId, session);
    return session;
}

// Removes a session entirely, e.g. when a user explicitly resets the chat.
function clearSession(sessionId) {
    sessions.delete(sessionId);
}

function sweepExpiredSessions() {
    for (const [sessionId, session] of sessions) {
        if (isExpired(session)) {
            sessions.delete(sessionId);
        }
    }
}

const sweepTimer = setInterval(sweepExpiredSessions, SWEEP_INTERVAL_MS);
// Don't let this timer keep a short-lived process (tests, scripts) alive.
if (typeof sweepTimer.unref === 'function') sweepTimer.unref();

// TEST-ONLY: backdates a session's updatedAt so expiry can be exercised
// without waiting 30 real minutes. Not used by any production code path —
// exists purely so scripts/test-sessionstore.js can simulate an expired
// session deterministically.
function _setUpdatedAtForTesting(sessionId, date) {
    const session = sessions.get(sessionId);
    if (session) session.updatedAt = date;
}

module.exports = {
    getSession,
    updateSession,
    clearSession,
    _setUpdatedAtForTesting,
};
