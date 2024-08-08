const crypto = require('crypto');

// Middleware to generate CSRF token and add it to the session
function generateCsrfToken(req, res, next) {
    if (!req.session.csrfmiddlewaretoken) {
        req.session.csrfmiddlewaretoken = crypto.randomBytes(64).toString('hex');
    }
    next();
}

// Middleware to validate CSRF token from the request
function validateCsrfToken(req, res, next) {
    const csrfTokenFromSession = req.session.csrfmiddlewaretoken;
    const csrfTokenFromBody = req.body.csrfmiddlewaretoken || req.headers['csrfmiddlewaretoken'];
    console.log(`csrfTokenFromSession: ${csrfTokenFromSession}`);
    // console.log(`csrfTokenFromBody: ${csrfTokenFromBody}`);

    if (csrfTokenFromSession && csrfTokenFromSession === csrfTokenFromBody) {
        next();
    } else {
        res.status(403).json({ error: 'Invalid CSRF token' });
    }
}

module.exports = { generateCsrfToken, validateCsrfToken };
