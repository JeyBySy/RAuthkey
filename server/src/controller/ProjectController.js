const db = require('../../models');
const { project_master } = db
const { generateUUID4, generateRandomString } = require('../../utils/genRandomChar');
const { formatAssociate } = require('../../utils/formatAssociate')
const { regenerateCsrfToken } = require('../middlewares/CsrfMiddleware');
const { Sequelize } = require('sequelize');

// Project Management
exports.getProjects = async (req, res) => {
    const { id } = req.params
    try {
        var projects

        if (id || id != null) {
            projects = await project_master.findByPk(id);

        } else {
            projects = await project_master.findAll({ order: [['createdAt', 'DESC'],] });
        }

        res.send({
            success: projects == null ? false : true,
            projects: projects || [],
        })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server error' });
    }

};

exports.create_project = async (req, res, next) => {
    const { project_name, redirect_url, project_website } = req.body;
    try {
        const projectAssociate = formatAssociate(project_name)
        const AuthKey = `${projectAssociate}_${generateUUID4()}`
        const AuthSecretKey = `${projectAssociate}_${generateUUID4()}`


        const createProject = await project_master.create({
            project_name: project_name,
            project_owner_user_id: req.user.id,
            project_associate: projectAssociate,
            project_auth_key: AuthKey,
            project_auth_secret: AuthSecretKey,
            project_website,
            redirect_url
        })

        req.session.csrfmiddlewaretoken = regenerateCsrfToken(req, res);

        res.status(201).json({
            success: true,
            message: "Project added successfully",
            project_name: createProject.project_name,
            project_code: createProject.project_code,
            project_associate: createProject.project_associate,
            csrfToken: req.session.csrfmiddlewaretoken
        });

    } catch (error) {
        if (error instanceof Sequelize.UniqueConstraintError) {
            // Handle unique constraint violation
            return res.status(400).json({
                success: false,
                message: "Project name must be unique",
                csrfToken: req.session.csrfmiddlewaretoken
            });
        }
        res.status(500).json({ success: false, message: "Internal Server error", error });
    }
};

exports.deleteProject = async (req, res) => {
    const { id } = req.params
    try {
        const deleteProject = await project_master.destroy({
            where: { project_code: id },
        })
        console.log("deleteProject", deleteProject);

        if (deleteProject > 0) {
            req.session.csrfmiddlewaretoken = regenerateCsrfToken(req, res);
            return res.json({
                success: true,
                message: 'Project Deleted',
                csrfToken: req.session.csrfmiddlewaretoken
            })
        } else {
            return res.json({
                success: false,
                message: `Project with id '${id}' does not exist`,
                csrfToken: req.session.csrfmiddlewaretoken
            })
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
            req.session.csrfmiddlewaretoken = regenerateCsrfToken(req, res);
            return res.json({
                success: true,
                message: 'Project Updated',
                project: updatedProject,
                csrfToken: req.session.csrfmiddlewaretoken
            })
        } else {
            return res.send({
                success: false,
                message: `Project with id '${id}' does not exist`,
                csrfToken: req.session.csrfmiddlewaretoken
            })
        }

    } catch (error) {
        console.error("Error updateProject:", error);
        res.status(500).json({ success: false, error: "Internal Server error" });
    }
}


exports.regenerateAuthKey = async (req, res) => {
    const { id } = req.params
    const { project_name } = req.body
    try {

        const projectAssociate = formatAssociate(project_name)
        const ApiKey = `${projectAssociate}_${generateUUID4()}`
        const [updatedCount, [updatedProject]] = await project_master.update(
            {
                project_auth_key: ApiKey,
            },
            {
                where: { project_code: id },
                returning: true
            }
        )

        if (updatedCount > 0) {
            req.session.csrfmiddlewaretoken = regenerateCsrfToken(req, res);
            return res.json({
                success: true,
                message: 'Project ApiKey Updated',
                project: updatedProject,
                csrfToken: req.session.csrfmiddlewaretoken
            })
        } else {
            return res.send({
                success: false,
                message: `Project with id '${id}' does not exist`,
                csrfToken: req.session.csrfmiddlewaretoken
            })
        }

    } catch (error) {
        console.error("Error regenerateApiKey:", error);
        res.status(500).json({ success: false, error: "Internal Server error" });
    }
}

exports.regenerateAuthSecret = async (req, res) => {
    const { id } = req.params
    const { project_name } = req.body
    try {

        const projectAssociate = formatAssociate(project_name)
        const SecretKey = `${projectAssociate}_${generateUUID4()}`
        const [updatedCount, [updatedProject]] = await project_master.update(
            {
                project_auth_secret: SecretKey,
            },
            {
                where: { project_code: id },
                returning: true
            }
        )

        if (updatedCount > 0) {
            req.session.csrfmiddlewaretoken = regenerateCsrfToken(req, res);
            return res.json({
                success: true,
                message: 'Project SecretKey Updated',
                project: updatedProject,
                csrfToken: req.session.csrfmiddlewaretoken
            })
        } else {
            return res.send({
                success: false,
                message: `Project with id '${id}' does not exist`,
                csrfToken: req.session.csrfmiddlewaretoken
            })
        }

    } catch (error) {
        console.error("Error regenerateSecretKey:", error);
        res.status(500).json({ success: false, error: "Internal Server error" });
    }
}
