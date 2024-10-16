const db = require('../../models');
const bcrypt = require('bcrypt');
const { project_master, user_master_tbl, oauth2_client } = db
const { generateUUID4, generateRandomString } = require('../../utils/genRandomChar');
const { formatAssociate } = require('../../utils/formatAssociate')
const { signToken } = require('../../utils/Jwt')

exports.index = async (req, res) => {
    res.send(req.session.csrfmiddlewaretoken);
};

// User Management
exports.getUsers = async (req, res) => {
    res.send("hello");
};

