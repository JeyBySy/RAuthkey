const router = require('express').Router();
const ApiController = require('../controller/ApiController');
const { AuthMiddleware } = require('../middlewares/AuthMiddleware');
const { generateCsrfToken, validateCsrfToken } = require('../middlewares/CsrfMiddleware');

router.use(generateCsrfToken);
// router.use(AuthMiddleware); //TEMP

router.route('/')
    .get(ApiController.index);

router.route('/login')
    .post(ApiController.login);

// // User Management
// router.route('/users')
//     .get( ApiController.getAllUsers)
//     .post(validateCsrfToken, ApiController.createUser);

// router.route('/users/:id')
//     .get( ApiController.getUserById)
//     .put( validateCsrfToken, ApiController.updateUser)
//     .delete( validateCsrfToken, ApiController.deleteUser);

// // Project Management
router.route('/projects')
    .get(validateCsrfToken, ApiController.getAllProjects)
    .post(validateCsrfToken, ApiController.create_project);

// router.route('/projects/:id')
//     .get( ApiController.getProjectById)
//     .put( validateCsrfToken, ApiController.updateProject)
//     .delete( validateCsrfToken, ApiController.deleteProject);




module.exports = router;