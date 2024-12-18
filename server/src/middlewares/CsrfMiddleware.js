const crypto = require('crypto');
const { COOKIE_SESSION } = require('../../utils/constants');


function generateCsrfToken(req, res, next) {
    let csrf_token = crypto.randomBytes(64).toString('hex');
    if (!req.session.csrfmiddlewaretoken) {
        req.session.csrfmiddlewaretoken = csrf_token
        // console.log(`Generated CSRF Token: ${req.session.csrfmiddlewaretoken}`);
    } else {
        // console.log(`Existing CSRF Token: ${req.session.csrfmiddlewaretoken}`);
    }
    // res.cookie('csrfToken', req.session.csrfmiddlewaretoken, COOKIE_SESSION);
    // console.log(req.url);

    next();
}


// Middleware to validate CSRF token from the request
function validateCsrfToken(req, res, next) {
    const csrfTokenFromSession = req.session.csrfmiddlewaretoken; //server copy of token
    const csrfTokenFromBody = req.headers.csrfmiddlewaretoken;

    // console.log(`csrfTokenFromSession: ${csrfTokenFromSession}`);
    // console.log(`csrfTokenFromBody: ${csrfTokenFromBody}`);

    if (csrfTokenFromSession && csrfTokenFromSession === csrfTokenFromBody) {
        next();
    } else {
        res.status(403).json({ error: 'Invalid CSRF token' });
    }
}


function regenerateCsrfToken(req, res) {
    const newCsrfToken = crypto.randomBytes(64).toString('hex');
    req.session.csrfmiddlewaretoken = newCsrfToken; // Update session token
    // res.cookie('csrfToken', newCsrfToken, COOKIE_SESSION); // Set new cookie
    console.log(`Regenerated CSRF Token: ${newCsrfToken}`);
    return newCsrfToken; // Optionally return the new token
}

module.exports = { generateCsrfToken, validateCsrfToken, regenerateCsrfToken };
