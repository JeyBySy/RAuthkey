// helpers.js
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

function gen_random_string(length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
};

// Generate a random client ID
const generateUUID4 = () => {
    return uuidv4().split('-').join('');
};

// Generate a random client secret
const generateRandomString = (value = 40) => {
    return gen_random_string(value);
};

module.exports = {
    generateUUID4,
    generateRandomString
};

