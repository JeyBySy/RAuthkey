const db = require('../../models');
const bcrypt = require('bcrypt');
const { project_master } = db
const { generateUUID4, generateRandomString } = require('../../utils/genRandomChar');
const { formatAssociate } = require('../../utils/formatAssociate')
const { regenerateCsrfToken } = require('../middlewares/CsrfMiddleware');


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
    const { project_name } = req.body;
    try {
        const projectAssociate = formatAssociate(project_name)

        const createProject = await project_master.create({
            project_name: project_name,
            project_owner_user_id: req.user.id,
            project_associate: projectAssociate,
            project_api_key: `${projectAssociate}_${generateUUID4()}`,
            project_api_secret: `${projectAssociate}_${generateUUID4()}`
        })

        const newCsrfToken = regenerateCsrfToken(req, res)
        req.session.csrfmiddlewaretoken = newCsrfToken

        res.status(201).json({
            success: true,
            message: "Project added successfully",
            project_name: createProject.project_name,
            project_associate: createProject.project_associate,
            csrfToken: req.session.csrfmiddlewaretoken
        });

    } catch (error) {
        // console.error("Error create_project:", error);
        res.status(500).json({ success: false, message: "Internal Server errosssssssssssssr", error });
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
