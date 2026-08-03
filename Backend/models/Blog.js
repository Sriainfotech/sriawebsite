const mongoose = require('mongoose');

function slugify(text) {
    return text
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    excerpt: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        required: true,
    },
    coverImageUrl: {
        type: String,
        default: '',
    },
    // CSS object-position ("x% y%") — the focal point kept in view when the
    // image is cropped to the card/hero aspect ratio.
    coverImagePosition: {
        type: String,
        default: '50% 50%',
    },
    // Zoom applied around coverImagePosition, as a percentage (100 = no zoom).
    coverImageZoom: {
        type: Number,
        default: 100,
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft',
    },
    author: {
        type: String,
        default: 'SRIA Infotech Team',
    },
    publishedAt: {
        type: Date,
        default: null,
    },
    // Computed from `content` word count on every save — kept as a stored
    // field (rather than derived per-request) so the public list endpoint
    // can show an accurate read time without fetching full post content.
    readTimeMinutes: {
        type: Number,
        default: 1,
    },
}, { timestamps: true });

const WORDS_PER_MINUTE = 200;
BlogSchema.pre('save', function computeReadTime() {
    if (this.isModified('content')) {
        const words = (this.content || '').trim().split(/\s+/).filter(Boolean).length;
        this.readTimeMinutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
    }
});

BlogSchema.statics.slugify = slugify;

module.exports = mongoose.model('Blog', BlogSchema);
