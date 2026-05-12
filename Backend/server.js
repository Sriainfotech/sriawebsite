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
app.use(cors());
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

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
