const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const ProfileRequest = require('./models/ProfileRequest');
const NotifySubscriber = require('./models/NotifySubscriber');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
});
app.use(express.json());

// MongoDB Connection
mongoose.connect(
    process.env.MONGO_URI || 'mongodb://localhost:27017/sria_craft'
)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    console.log('Received contact form submission:', { name, email, phone, message });

    // Create a transporter object using the default SMTP transport
    // For Gmail, you might need to use an App Password
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or your email provider
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email, // Sender address (from the form)
        to: process.env.EMAIL_USER, // Receiver address (your email)
        subject: `New Contact Form Submission from ${name}`,
        text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      
      Message:
      ${message}
    `,
    };

    try {
        // Check if email credentials are provided
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn("Email credentials not found in .env. Logging submission only.");
            return res.status(200).json({ success: true, message: 'Form submitted successfully (Email simulation)' });
        }

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send message.', error: error.message });
    }
});

app.post("/api/download-profile", async (req, res) => {

    console.log("DOWNLOAD PROFILE ROUTE HIT");
    const { name, email, phone } = req.body;

    try {
        const newRequest = new ProfileRequest({
            name,
            email,
            phone,
        });

        await newRequest.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Profile Download Request from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nThis user has downloaded the Company Profile.`,
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
            console.log('Profile download email sent successfully');
        } else {
            console.warn("Email credentials not found in .env. Logging download request only.");
        }

        res.status(201).json({
            success: true,
            message: "Profile request saved successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to save request",
            error: error.message,
        });
    }
});


app.post('/api/notify', async (req, res) => {
    const { email, page } = req.body;

    if (!email || !email.trim()) {
        return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    try {
        const subscriber = new NotifySubscriber({ email: email.trim(), page: page || 'unknown' });
        await subscriber.save();
        console.log(`Notify subscriber saved: ${email} (page: ${page})`);
        res.status(201).json({ success: true, message: 'You\'re on the list!' });
    } catch (error) {
        console.error('Error saving notify subscriber:', error);
        res.status(500).json({ success: false, message: 'Failed to save. Please try again.', error: error.message });
    }
});

let analyticsCache = null;
let analyticsCachedAt = 0;
const ANALYTICS_TTL = 5 * 60 * 1000; // refresh every 5 minutes

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

// Warm the cache on startup so the first user request is instant
fetchAnalytics().then(data => { if (data) { analyticsCache = data; analyticsCachedAt = Date.now(); } });

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
    if (analyticsCache) return res.json(analyticsCache); // serve stale on failure
    res.status(500).json({ success: false, message: 'Analytics unavailable.' });
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(process.env.APPS_SCRIPT_URL)
});
