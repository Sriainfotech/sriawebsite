const mongoose = require('mongoose');

const NotifySubscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    page: {
        type: String,
        required: false,
        default: 'unknown',
    },
    subscribedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('NotifySubscriber', NotifySubscriberSchema);
