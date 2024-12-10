const router = require('express').Router();
const UserController = require('../controller/UserController');
const { generateCsrfToken, validateCsrfToken } = require('../middlewares/CsrfMiddleware');

router.use(generateCsrfToken);

router.route('/')
    .get(UserController.index);

router.route('/login')
    .post(UserController.login);

router.route('/signup')
    .post(UserController.signup);

router.route('/all')
    .get(UserController.getAllUsers);


module.exports = router;