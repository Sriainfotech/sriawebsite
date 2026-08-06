const mongoose = require('mongoose');

const ChatLogSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: true,
        trim: true,
    },
    question: {
        type: String,
        required: true,
    },
    matchedEntryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KBEntry',
        required: false,
        default: null,
    },
    confidenceScore: {
        type: Number,
        required: true,
        default: 0,
    },
    // Distinguishes a genuine KB match from a genuine fallback from the new
    // "yes"-after-escalation-offer shortcut (server.js) that never touches
    // the matcher at all — without this, that shortcut's log entry would be
    // indistinguishable from a real match/fallback by confidenceScore alone.
    // Optional/unset on older rows written before this field existed.
    matchType: {
        type: String,
        enum: ['kb_match', 'fallback', 'escalation_shortcut'],
        required: false,
    },
    helpful: {
        type: Boolean,
        default: null,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('ChatLog', ChatLogSchema);
