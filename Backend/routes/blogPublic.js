const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

// GET /api/blogs — list published posts only, paginated
router.get('/', async (req, res) => {
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 9, 1), 50);
    const skip = (page - 1) * limit;

    try {
        const filter = { status: 'published' };
        const [posts, total] = await Promise.all([
            Blog.find(filter)
                .sort({ publishedAt: -1 })
                .skip(skip)
                .limit(limit)
                .select('-content'),
            Blog.countDocuments(filter),
        ]);

        res.json({
            success: true,
            posts,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit) || 1,
            },
        });
    } catch (error) {
        console.error('Error listing published blogs:', error);
        res.status(500).json({ success: false, message: 'Failed to load posts.' });
    }
});

// GET /api/blogs/:slug — single published post
router.get('/:slug', async (req, res) => {
    try {
        const post = await Blog.findOne({ slug: req.params.slug, status: 'published' });
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found.' });
        }
        res.json({ success: true, post });
    } catch (error) {
        console.error('Error fetching blog post:', error);
        res.status(500).json({ success: false, message: 'Failed to load post.' });
    }
});

module.exports = router;
