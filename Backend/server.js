// Must run before any other require() — lib/imagekit.js reads
// process.env.IMAGEKIT_* at module-load time (when routes/admin.js requires
// it below), so .env has to be injected first or that client construction
// fails with "Missing publicKey".
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const ProfileRequest = require('./models/ProfileRequest');
const NotifySubscriber = require('./models/NotifySubscriber');
const blogPublicRoutes = require('./routes/blogPublic');
const adminRoutes = require('./routes/admin');
const ChatLog = require('./models/ChatLog');
const { matchQuery, refreshIndex } = require('./chatbot/matcher');
const sessionStore = require('./chatbot/sessionStore');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS — use the cors package properly
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// ✅ MongoDB — with reconnect handling
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sria_craft')
    .then(async () => {
        console.log('MongoDB Connected');
        // Build the chatbot's Fuse.js index only once the KB collection is
        // actually reachable — a failure here shouldn't crash the server,
        // just leave matcher.js to lazily rebuild on first query.
        try {
            await refreshIndex();
            console.log('Chatbot KB index built successfully');
        } catch (err) {
            console.error('Chatbot KB index build failed:', err.message);
        }
    })
    .catch(err => console.error('MongoDB connection error:', err));

mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected. Attempting to reconnect...');
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/sria_craft')
        .catch(err => console.error('MongoDB reconnect error:', err));
});

// ✅ Reusable transporter — created once
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// ✅ File upload — memory storage (no disk writes), size-capped, restricted to document/image types
const ALLOWED_DOCUMENT_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/png',
    'image/jpeg',
];

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
    fileFilter: (req, file, cb) => {
        if (ALLOWED_DOCUMENT_TYPES.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Unsupported file type. Please upload a PDF, Word document, or image.'));
        }
    },
});

// ✅ /api/contact — with input validation, correct `from` field, and optional document attachment
app.post('/api/contact', (req, res) => {
    upload.single('document')(req, res, async (uploadErr) => {
        if (uploadErr) {
            return res.status(400).json({ success: false, message: uploadErr.message || 'File upload failed.' });
        }

        const { name, email, phone, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
        }

        console.log('Received contact form submission:', { name, email, phone, message, file: req.file?.originalname });

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn('Email credentials not set. Logging submission only.');
            return res.status(200).json({ success: true, message: 'Form submitted successfully.' });
        }

        const mailOptions = {
            from: process.env.EMAIL_USER, // ✅ must be your Gmail, not the user's email
            replyTo: email,               // ✅ so you can reply to the visitor
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
            attachments: req.file
                ? [{ filename: req.file.originalname, content: req.file.buffer, contentType: req.file.mimetype }]
                : [],
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Contact email sent successfully');
            res.status(200).json({ success: true, message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error sending contact email:', error);
            res.status(500).json({ success: false, message: 'Failed to send message.', error: error.message });
        }
    });
});

// ✅ /api/download-profile — with input validation and correct `from` field
app.post('/api/download-profile', async (req, res) => {
    const { name, email, phone, profile } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    try {
        const newRequest = new ProfileRequest({ name, email, phone, profile });
        await newRequest.save();

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const mailOptions = {
                from: process.env.EMAIL_USER, // ✅ fixed
                replyTo: email,
                to: process.env.EMAIL_USER,
                subject: `New Profile Download Request from ${name || email}`,
                text: `Name: ${name || 'N/A'}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nRequested Profile: ${profile || 'N/A'}\n\nThis user has downloaded the Company Profile.`,
            };
            await transporter.sendMail(mailOptions);
            console.log('Profile download email sent successfully');
        }

        res.status(201).json({ success: true, message: 'Profile request saved successfully' });
    } catch (error) {
        console.error('Error in download-profile:', error);
        res.status(500).json({ success: false, message: 'Failed to save request.', error: error.message });
    }
});

// ✅ /api/notify
app.post('/api/notify', async (req, res) => {
    const { email, page } = req.body;

    if (!email || !email.trim()) {
        return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    try {
        const subscriber = new NotifySubscriber({ email: email.trim(), page: page || 'unknown' });
        await subscriber.save();
        console.log(`Notify subscriber saved: ${email} (page: ${page})`);
        res.status(201).json({ success: true, message: "You're on the list!" });
    } catch (error) {
        console.error('Error saving notify subscriber:', error);
        res.status(500).json({ success: false, message: 'Failed to save. Please try again.', error: error.message });
    }
});

// ✅ /api/analytics — with caching
let analyticsCache = null;
let analyticsCachedAt = 0;
const ANALYTICS_TTL = 5 * 60 * 1000;

async function fetchAnalytics() {
    if (!process.env.APPS_SCRIPT_URL) return null;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
        const response = await fetch(process.env.APPS_SCRIPT_URL, {
            redirect: 'follow',
            signal: controller.signal,
        });
        clearTimeout(timeout);
        return await response.json();
    } catch (err) {
        clearTimeout(timeout);
        console.error('Analytics fetch error:', err.message);
        return null;
    }
}

fetchAnalytics().then(data => {
    if (data) { analyticsCache = data; analyticsCachedAt = Date.now(); }
});

app.get('/api/analytics', async (req, res) => {
    const now = Date.now();
    if (analyticsCache && now - analyticsCachedAt < ANALYTICS_TTL) {
        return res.json(analyticsCache);
    }
    const data = await fetchAnalytics();
    if (data) {
        analyticsCache = data;
        analyticsCachedAt = now;
        return res.json(data);
    }
    if (analyticsCache) return res.json(analyticsCache);
    res.status(500).json({ success: false, message: 'Analytics unavailable.' });
});

// ✅ Blog — public read routes + JWT-protected admin CRUD
app.use('/api/blogs', blogPublicRoutes);
app.use('/api/admin', adminRoutes);

// ✅ /api/chatbot/query — match a user message against the KB, log the
// exchange, and refresh follow-up session context.
//
// Response shape (see explanation given alongside this change):
//   { success: true, answer, link, category, followUpOptions,
//     escalationCta, escalationLink, isFallback, logId }
// On a real match these fields are copied straight from the matched
// KBEntry; on a fallback, answer/escalationLink come from matcher.js's
// generic fallback copy instead, and link/category/followUpOptions are
// null/empty since there's no entry to source them from.
app.post('/api/chatbot/query', async (req, res) => {
    const { message, sessionId } = req.body;

    if (!sessionId) {
        return res.status(400).json({ success: false, message: 'sessionId is required.' });
    }
    if (!message || typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({ success: false, message: 'message is required and must be a non-empty string.' });
    }

    try {
        const sessionContext = sessionStore.getSession(sessionId);
        const result = await matchQuery({ message, sessionContext });
        const { entry, confidence, isFallback } = result;

        // Fire-and-forget ChatLog write: mongoose assigns _id client-side as
        // soon as the document is constructed, so it's available for the
        // response below without waiting on save() to resolve. Errors are
        // logged, not swallowed, but never block or fail the response.
        const chatLog = new ChatLog({
            sessionId,
            question: message,
            matchedEntryId: entry ? entry._id : null,
            confidenceScore: confidence || 0,
            helpful: null,
        });
        chatLog.save().catch(err => console.error('Error saving ChatLog:', err));

        if (!isFallback && entry) {
            sessionStore.updateSession(sessionId, {
                entryId: entry._id,
                topic: entry.subcategory,
                category: entry.category,
            });
        }

        res.status(200).json({
            success: true,
            answer: isFallback ? result.message : entry.answer,
            link: isFallback ? null : (entry.link || null),
            category: isFallback ? null : entry.category,
            followUpOptions: isFallback ? [] : (entry.follow_up_options || []),
            escalationCta: isFallback ? 'Talk to our team' : (entry.escalation_cta || null),
            escalationLink: isFallback ? result.escalation_link : (entry.escalation_link || null),
            isFallback,
            logId: chatLog._id,
        });
    } catch (error) {
        console.error('Error in /api/chatbot/query:', error);
        res.status(500).json({ success: false, message: 'Failed to process chatbot query.', error: error.message });
    }
});

// ✅ /api/chatbot/feedback — record whether a matched answer was helpful
app.post('/api/chatbot/feedback', async (req, res) => {
    const { logId, helpful } = req.body;

    if (!logId || !mongoose.Types.ObjectId.isValid(logId)) {
        return res.status(400).json({ success: false, message: 'A valid logId is required.' });
    }
    if (typeof helpful !== 'boolean') {
        return res.status(400).json({ success: false, message: 'helpful must be a boolean.' });
    }

    try {
        const updated = await ChatLog.findByIdAndUpdate(logId, { helpful }, { new: true });
        if (!updated) {
            return res.status(404).json({ success: false, message: 'No ChatLog entry found for that logId.' });
        }
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error in /api/chatbot/feedback:', error);
        res.status(500).json({ success: false, message: 'Failed to save feedback.', error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});