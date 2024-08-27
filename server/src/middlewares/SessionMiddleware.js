const session = require('express-session');

const sessionMiddleware = session({
    secret: '2da37c42a45a34a6305177e426c44f', // Change this to a strong, unique secret
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 1000 * 60 * 60 * 24 // Session expires after 24 hours (in milliseconds)
    }
});

module.exports = sessionMiddleware;
