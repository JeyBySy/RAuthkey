const db = require('../../models');
const { oauth2_client, oauth2_codes } = db
const { AuthClientValidator } = require("../validators/Auth_Client_validator")
const { generateUUID4, generateRandomString } = require('../../utils/genRandomChar');

exports.index = async (req, res) => {
    // Add check validation if user is login
    const { response_type, client_id, redirect_uri, scope } = req.query;

    try {
        const client = await oauth2_client.findOne({ where: { client_id } });
        console.log(client);

        const [isValid, message] = AuthClientValidator(client, redirect_uri)
        if (!isValid) return res.status(400).json(message)

        const createCode = await oauth2_codes.create({
            code: generateRandomString(50),
            client_id,
            response_type,
            scope,
            redirect_uri
        })

        res.send({ message: "Code successfully created", code: createCode.code })


    } catch (error) {
        console.error('Error in /authorize:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};