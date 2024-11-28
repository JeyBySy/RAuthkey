const router = require('express').Router();
const ProjectController = require('../controller/ProjectController');
const { AuthMiddleware } = require('../middlewares/AuthMiddleware');
const { generateCsrfToken, validateCsrfToken } = require('../middlewares/CsrfMiddleware');

router.use(generateCsrfToken);

router.route('/')
    .get(AuthMiddleware, validateCsrfToken, ProjectController.getProjects)
    .post(AuthMiddleware, validateCsrfToken, ProjectController.create_project);

router.route('/:id')
    .get(AuthMiddleware, validateCsrfToken, ProjectController.getProjects)
    .put(AuthMiddleware, validateCsrfToken, ProjectController.updateProject)
    .delete(AuthMiddleware, validateCsrfToken, ProjectController.deleteProject);

router.route('/key/regenerateAuthKey/:id')
    .post(AuthMiddleware, validateCsrfToken, ProjectController.regenerateAuthKey)

router.route('/key/regenerateAuthSecret/:id')
    .post(AuthMiddleware, validateCsrfToken, ProjectController.regenerateAuthSecret)


router.route('/key/status/:id')
    .get(AuthMiddleware, validateCsrfToken, ProjectController.regenerateAuthSecret)


module.exports = router;