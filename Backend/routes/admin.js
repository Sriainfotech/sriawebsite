const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const Blog = require('../models/Blog');
const Admin = require('../models/Admin');
const { requireAdminAuth } = require('../middleware/auth');
const imagekit = require('../lib/imagekit');

const router = express.Router();

const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
        if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Unsupported file type. Please upload a PNG, JPEG, WEBP, or GIF image.'));
        }
    },
});

// Generates a unique slug from a title (or a provided candidate), appending
// "-2", "-3", ... on collision. `excludeId` skips the document being edited
// so saving a post without changing its title doesn't collide with itself.
async function generateUniqueSlug(candidate, excludeId) {
    const base = Blog.slugify(candidate);
    let slug = base;
    let suffix = 2;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const query = { slug };
        if (excludeId) query._id = { $ne: excludeId };
        const existing = await Blog.findOne(query).select('_id');
        if (!existing) return slug;
        slug = `${base}-${suffix}`;
        suffix += 1;
    }
}

// ── POST /api/admin/login ───────────────────────────────────────────────
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required.' });
    }
    if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET is not set — refusing to issue admin tokens.');
        return res.status(500).json({ success: false, message: 'Server auth misconfiguration.' });
    }

    try {
        const admin = await Admin.findOne({ username: username.trim() });
        if (!admin) {
            return res.status(401).json({ success: false, message: 'Invalid username or password.' });
        }

        const passwordMatches = await bcrypt.compare(password, admin.passwordHash);
        if (!passwordMatches) {
            return res.status(401).json({ success: false, message: 'Invalid username or password.' });
        }

        const token = jwt.sign(
            { adminId: admin._id.toString(), username: admin.username },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({ success: true, token, username: admin.username });
    } catch (error) {
        console.error('Admin login error:', error);
        res.status(500).json({ success: false, message: 'Login failed. Please try again.' });
    }
});

// Everything below requires a valid admin JWT.
router.use(requireAdminAuth);

// ── POST /api/admin/upload-image — cover image upload, returns a real URL ─
router.post('/upload-image', (req, res) => {
    upload.single('image')(req, res, async (uploadErr) => {
        if (uploadErr) {
            return res.status(400).json({ success: false, message: uploadErr.message || 'Upload failed.' });
        }
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No image file provided.' });
        }

        try {
            const result = await imagekit.upload({
                file: req.file.buffer,
                fileName: req.file.originalname,
                folder: 'sria/blog',
                useUniqueFileName: true,
            });
            res.status(201).json({ success: true, url: result.url });
        } catch (error) {
            console.error('Error uploading blog cover image:', error);
            res.status(500).json({ success: false, message: 'Failed to upload image.' });
        }
    });
});

// ── GET /api/admin/blogs — all posts (draft + published) ───────────────
router.get('/blogs', async (req, res) => {
    try {
        const posts = await Blog.find({}).sort({ updatedAt: -1 }).select('-content');
        res.json({ success: true, posts });
    } catch (error) {
        console.error('Error listing admin blogs:', error);
        res.status(500).json({ success: false, message: 'Failed to load posts.' });
    }
});

// ── GET /api/admin/blogs/:id — single post, full content (for edit form) ─
router.get('/blogs/:id', async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found.' });
        }
        res.json({ success: true, post });
    } catch (error) {
        console.error('Error fetching admin blog post:', error);
        res.status(500).json({ success: false, message: 'Failed to load post.' });
    }
});

// ── POST /api/admin/blogs — create ──────────────────────────────────────
router.post('/blogs', async (req, res) => {
    const { title, slug, excerpt, content, coverImageUrl, coverImagePosition, coverImageZoom, status, author } = req.body;

    if (!title || !content) {
        return res.status(400).json({ success: false, message: 'Title and content are required.' });
    }

    try {
        const finalSlug = await generateUniqueSlug(slug || title);
        const isPublished = status === 'published';

        const post = new Blog({
            title,
            slug: finalSlug,
            excerpt: excerpt || '',
            content,
            coverImageUrl: coverImageUrl || '',
            coverImagePosition: coverImagePosition || '50% 50%',
            coverImageZoom: coverImageZoom || 100,
            status: isPublished ? 'published' : 'draft',
            author: author || 'SRIA Infotech Team',
            publishedAt: isPublished ? new Date() : null,
        });

        await post.save();
        res.status(201).json({ success: true, post });
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ success: false, message: 'Failed to create post.' });
    }
});

// ── PUT /api/admin/blogs/:id — update ───────────────────────────────────
router.put('/blogs/:id', async (req, res) => {
    const { title, slug, excerpt, content, coverImageUrl, coverImagePosition, coverImageZoom, status, author } = req.body;

    try {
        const post = await Blog.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found.' });
        }

        if (title) post.title = title;
        if (excerpt !== undefined) post.excerpt = excerpt;
        if (content) post.content = content;
        if (coverImageUrl !== undefined) post.coverImageUrl = coverImageUrl;
        if (coverImagePosition !== undefined) post.coverImagePosition = coverImagePosition;
        if (coverImageZoom !== undefined) post.coverImageZoom = coverImageZoom;
        if (author) post.author = author;

        if (slug && slug !== post.slug) {
            post.slug = await generateUniqueSlug(slug, post._id);
        } else if (title && !slug) {
            // Slug stays as-is unless the admin explicitly edits it — title
            // changes alone don't silently break existing shared links.
        }

        if (status && status !== post.status) {
            post.status = status;
            if (status === 'published' && !post.publishedAt) {
                post.publishedAt = new Date();
            }
        }

        await post.save();
        res.json({ success: true, post });
    } catch (error) {
        console.error('Error updating blog post:', error);
        res.status(500).json({ success: false, message: 'Failed to update post.' });
    }
});

// ── PATCH /api/admin/blogs/:id/publish — toggle publish status ─────────
router.patch('/blogs/:id/publish', async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found.' });
        }

        post.status = post.status === 'published' ? 'draft' : 'published';
        if (post.status === 'published' && !post.publishedAt) {
            post.publishedAt = new Date();
        }

        await post.save();
        res.json({ success: true, post });
    } catch (error) {
        console.error('Error toggling publish status:', error);
        res.status(500).json({ success: false, message: 'Failed to update post status.' });
    }
});

// ── DELETE /api/admin/blogs/:id ─────────────────────────────────────────
router.delete('/blogs/:id', async (req, res) => {
    try {
        const post = await Blog.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found.' });
        }
        res.json({ success: true, message: 'Post deleted.' });
    } catch (error) {
        console.error('Error deleting blog post:', error);
        res.status(500).json({ success: false, message: 'Failed to delete post.' });
    }
});

module.exports = router;
