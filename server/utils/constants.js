require('dotenv').config();

module.exports = {
    JWT: {
        jwtSecret: process.env.JWT_SECRET,
        jwtExpiration: process.env.JWT_EXPIRES
    }
};