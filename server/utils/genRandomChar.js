// helpers.js
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const gen_random_string = (length) => {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
};

// Generate a random client ID
const generateUUID4 = () => {
    return uuidv4();
};

// Generate a random client secret
const generateRandomString = () => {
    return gen_random_string(40);
};

module.exports = {
    generateUUID4,
    generateRandomString
};
