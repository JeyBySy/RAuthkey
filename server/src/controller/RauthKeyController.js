const db = require('../../models');

exports.index = async (req, res) => {
    res.send("RauthKey index path");
};

exports.authorize = async (req, res) => {
    res.send("Authorize path");
};

exports.authorizeCallback = async (req, res) => {
    res.send("Authorize callback path");
};

exports.verifyToken = async (req, res) => {
    res.send("Verify token path");
};

exports.generateToken = async (req, res) => {
    res.send("Generate token path");
};

exports.validateAuthKey = async (req, res) => {
    res.send("Validate authKey and authSecret path");
};
