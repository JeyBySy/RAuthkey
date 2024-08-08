const db = require('../../models');
const bcrypt = require('bcrypt');
const { project_master, user_master_tbl, oauth2_client } = db
const { generateUUID4, generateRandomString } = require('../../utils/genRandomChar');
const { formatAssociate } = require('../../utils/formatAssociate')
const { BasicAuth } = require('../validators/BasicAuth_validator')
const { signToken } = require('../../utils/Jwt')

exports.index = async (req, res) => {
    res.send(req.session.csrfToken);

};

exports.getAllProjects = async (req, res) => {

    res.send(req.session.csrfmiddlewaretoken);

};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await user_master_tbl.findOne({ where: { user_email: email } });
        if (!user) return res.status(401).json({ success: false, message: 'Invalid email or password' }); // Error if no user found

        const isMatch = await bcrypt.compare(password, user.user_password);
        if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid email or password' });


        const token = signToken({ id: user.user_id });
        res.json({ success: true, token });

    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


exports.create_project = async (req, res, next) => {
    const { project_name, redirect_uris, grant_types, response_types, scope } = req.body;
    try {
        const projectAssociate = formatAssociate(project_name)

        const createProject = await project_master.create({
            project_name: project_name,
            project_associate: projectAssociate,
        })

        const createClient = await oauth2_client.create({
            project_code: createProject.project_code,
            client_id: generateUUID4(),
            client_secret: generateRandomString(),
            redirect_uri: JSON.stringify(redirect_uris),
            grant_types: JSON.stringify(grant_types),
            response_type: JSON.stringify(response_types),
            scope: JSON.stringify(scope)
        })

        req.session.csrfmiddlewaretoken = null


        res.status(201).json({
            status: 201,
            message: "Project added successfully",
            project_name: createProject.project_name,
            project_associate: createProject.project_associate,
            client_id: createClient.client_id
        });

    } catch (error) {
        console.error("Error create_project:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};