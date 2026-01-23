const mongoose = require('mongoose');

const ProfileRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false // Optional as per UI
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    downloadedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ProfileRequest', ProfileRequestSchema);
