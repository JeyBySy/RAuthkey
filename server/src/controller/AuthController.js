const db = require('../../models');
const { oauth2_client } = db
const { AuthClientValidator } = require("../validators/Auth_Client_validator")
const { generateUUID4, generateRandomString } = require('../../utils/genRandomChar');

exports.index = async (req, res) => {
    // Add check validation if user is login
    const { response_type, client_id, redirect_uri, scope } = req.query;

    try {
        const client = await oauth2_client.findOne({ where: { client_id } });

        const [isValid, message] = AuthClientValidator(client, redirect_uri)
        if (!isValid) return res.status(400).json(message)

        res.send({
            "status": 200,
            "code": generateRandomString()
        })


    } catch (error) {
        console.error('Error in /authorize:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};