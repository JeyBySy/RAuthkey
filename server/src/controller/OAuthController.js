const db = require('../../models');
const { oauth2_client, project_master } = db
const { generateUUID4, generateRandomString } = require('../../utils/genRandomChar');

exports.index = async (req, res) => {
    res.send("OAuthorization");
};

exports.authorize = async (req, res) => {
    const { response_type, client_id, redirect_uri, scope, state } = req.query;

    // Validate parameters and client_id
    // Generate authorization code and redirect the user

    res.status(200).json({ message: "Authorization endpoint", response_type, client_id, redirect_uri, scope, state });
};

exports.token = async (req, res) => {
    const { grant_type, code, redirect_uri, client_id, client_secret } = req.body;

    // Validate the grant_type, code, client_id, and client_secret
    // Exchange the authorization code for an access token

    res.status(200).json({ message: "Token endpoint", grant_type, code, redirect_uri, client_id, client_secret });
};

exports.revoke = async (req, res) => {
    const { token, token_type_hint } = req.body;

    // Revoke the specified token

    res.status(200).json({ message: "Revoke endpoint", token, token_type_hint });
};

exports.userinfo = async (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Authorization header missing" });
    }

    const token = authHeader.split(' ')[1];

    // Validate the access token and retrieve user information

    res.status(200).json({ message: "User info endpoint", token });
};

exports.introspect = async (req, res) => {
    const { token, token_type_hint } = req.body;

    // Validate and introspect the token

    res.status(200).json({ message: "Introspect endpoint", token, token_type_hint });
};

exports.register = async (req, res) => {
    const { client_name, redirect_uris, grant_types, response_types, scope } = req.body;

    if (!client_name || !Array.isArray(redirect_uris) || !Array.isArray(grant_types) || !Array.isArray(response_types) || typeof scope !== 'string') {
        return res.status(400).json({ error: "Invalid payload" });
    }

    try {
        const clientId = generateUUID4();
        const clientSecret = generateRandomString();

        const customerMasterClient = await project_master.create({
            project_name: client_name,

        })

        // Ensure project_code is generated and exists
        if (!customerMasterClient.project_code) {
            throw new Error('Customer code not generated.');
        }

        const newClient = await oauth2_client.create({
            client_id: clientId,
            client_secret: clientSecret,
            project_code: customerMasterClient.project_code,
            redirect_uri: JSON.stringify(redirect_uris),
            response_type: JSON.stringify(response_types),
            grant_types: JSON.stringify(grant_types),
        });


        res.status(201).json({
            message: "Client registered successfully",
            project_name: customerMasterClient.project_name,
            project_code: customerMasterClient.project_code,
            client_id: newClient.client_id,
            client_secret: newClient.client_secret
        });
    } catch (error) {
        console.error("Error registering client:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
