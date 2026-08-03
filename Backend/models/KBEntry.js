const mongoose = require('mongoose');

const KBEntrySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        trim: true,
    },
    subcategory: {
        type: String,
        required: false,
        trim: true,
    },
    keywords: {
        type: [String],
        default: [],
    },
    question_patterns: {
        type: [String],
        default: [],
    },
    answer: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
    depth: {
        type: String,
        enum: ['full', 'brief'],
        default: 'full',
    },
    follow_up_options: {
        type: [{
            label: {
                type: String,
                required: true,
            },
            targetId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'KBEntry',
                default: null,
            },
            action: {
                type: String,
                default: null,
            },
        }],
        default: [],
    },
    escalation_cta: {
        type: String,
        required: false,
    },
    escalation_link: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('KBEntry', KBEntrySchema);
