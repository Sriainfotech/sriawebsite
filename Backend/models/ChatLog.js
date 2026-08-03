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
