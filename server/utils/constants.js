require('dotenv').config();

module.exports = {
    JWT: {
        jwtSecret: process.env.JWT_SECRET,
        jwtExpiration: process.env.JWT_EXPIRES
    },
    COOKIE_SESSION: { httpOnly: true, secure: process.env.COOKIE_SESSION_SECURE }
};