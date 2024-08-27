const db = require('../../models');
const bcrypt = require('bcrypt');
const { project_master, user_master_tbl, oauth2_client } = db
const { generateUUID4, generateRandomString } = require('../../utils/genRandomChar');
const { formatAssociate } = require('../../utils/formatAssociate')
const { BasicAuth } = require('../validators/BasicAuth_validator')
const { signToken } = require('../../utils/Jwt')

exports.index = async (req, res) => {
    res.send(req.session.csrfmiddlewaretoken);

};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await user_master_tbl.findOne({ where: { user_email: email } });
        if (!user) return res.json({ success: false, message: 'Invalid email or password' }); // Error if no user found

        const isMatch = await bcrypt.compare(password, user.user_password);
        if (!isMatch) return res.json({ success: false, message: 'Invalid email or password' });


        const token = signToken({ id: user.user_id });
        res.json({ success: true, token });

    } catch (err) {
        console.error("Error login:", err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// User Management
exports.getUsers = async (req, res) => {
    res.send("hello");

};

// Project Management
exports.getProjects = async (req, res) => {
    const { id } = req.params
    try {
        var projects
        if (id || id != null) {
            projects = await project_master.findByPk(id);
        } else {
            projects = await project_master.findAll();
        }

        res.send({ success: true, projects: projects || [] })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server error' });
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

        // req.session.csrfmiddlewaretoken = null


        res.status(201).json({
            success: true,
            message: "Project added successfully",
            project_name: createProject.project_name,
            project_associate: createProject.project_associate,
            client_id: createClient.client_id
        });

    } catch (error) {
        console.error("Error create_project:", error);
        res.status(500).json({ success: false, message: "Internal Server error" });
    }
};

exports.deleteProject = async (req, res) => {
    const { id } = req.params
    try {
        const deleteProject = await project_master.destroy({
            where: { project_code: id },
        })

        if (deleteProject) {
            return res.send({ success: true, message: 'Project Deleted' })
        } else {
            return res.send({ success: false, message: `Project with id '${id}' does not exist` })
        }


    } catch (error) {
        console.error("Error deleteProject:", error);
        res.status(500).json({ success: false, error: "Internal Server error" });
    }
}

exports.updateProject = async (req, res) => {
    const { id } = req.params
    const { project_name } = req.body
    try {

        const projectAssociate = formatAssociate(project_name)
        const [updatedCount, [updatedProject]] = await project_master.update(
            {
                project_name: project_name,
                project_associate: String(projectAssociate).trim()
            },
            {
                where: { project_code: id },
                returning: true
            }
        )

        if (updatedCount > 0) {
            return res.send({ success: true, message: 'Project Updated', project: updatedProject })
        } else {
            return res.send({ success: false, message: `Project with id '${id}' does not exist` })
        }

    } catch (error) {
        console.error("Error updateProject:", error);
        res.status(500).json({ success: false, error: "Internal Server error" });
    }
}
