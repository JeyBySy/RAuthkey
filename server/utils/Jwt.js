const jwt = require('jsonwebtoken');
const { JWT } = require('../utils/constants');

const signToken = (payload) => {
    return jwt.sign(payload, JWT.jwtSecret, { expiresIn: JWT.jwtExpiration });
};

const verifyToken = (token) => {
    return jwt.verify(token, JWT.jwtSecret);
};

module.exports = { signToken, verifyToken };