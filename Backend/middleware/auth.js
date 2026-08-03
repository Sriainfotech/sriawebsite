const jwt = require('jsonwebtoken');

// Verifies the "Authorization: Bearer <token>" header set by the admin
// frontend after login. Rejects the request with 401 if missing/invalid.
function requireAdminAuth(req, res, next) {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Authentication required.' });
    }

    if (!process.env.JWT_SECRET) {
        console.error('JWT_SECRET is not set — refusing to verify admin tokens.');
        return res.status(500).json({ success: false, message: 'Server auth misconfiguration.' });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = payload;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: 'Invalid or expired session. Please log in again.' });
    }
}

module.exports = { requireAdminAuth };
