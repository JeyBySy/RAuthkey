const router = require('express').Router();
const AuthController = require('../controller/UserController');
const { generateCsrfToken, validateCsrfToken } = require('../middlewares/CsrfMiddleware');

router.use(generateCsrfToken);

router.route('/')
    .get(AuthController.index);

router.route('/login')
    .post(AuthController.login);

router.route('/signup')
    .post(AuthController.signup);


module.exports = router;