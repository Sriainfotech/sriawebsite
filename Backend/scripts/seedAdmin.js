// One-time setup script: creates the admin account used to log into
// /admin/login. Run manually — NOT wired into server startup — with:
//
//   node scripts/seedAdmin.js
//
// Reads ADMIN_USERNAME / ADMIN_PASSWORD from the environment (.env),
// hashes the password with bcrypt, and inserts the admin only if one
// with that username doesn't already exist (safe to re-run).

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

async function seed() {
    const { ADMIN_USERNAME, ADMIN_PASSWORD, MONGO_URI } = process.env;

    if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
        console.error('ADMIN_USERNAME and ADMIN_PASSWORD must be set in .env before running this script.');
        process.exit(1);
    }

    await mongoose.connect(MONGO_URI || 'mongodb://localhost:27017/sria_craft');
    console.log('MongoDB connected for admin seed.');

    const existing = await Admin.findOne({ username: ADMIN_USERNAME });
    if (existing) {
        console.log(`Admin "${ADMIN_USERNAME}" already exists — nothing to do.`);
        await mongoose.disconnect();
        return;
    }

    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);
    await Admin.create({ username: ADMIN_USERNAME, passwordHash });
    console.log(`Admin "${ADMIN_USERNAME}" created successfully.`);

    await mongoose.disconnect();
}

seed().catch((err) => {
    console.error('Admin seed failed:', err);
    process.exit(1);
});
