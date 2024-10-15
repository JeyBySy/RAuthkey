const router = require('express').Router();
const AuthController = require('../controller/AuthController');
const { generateCsrfToken, validateCsrfToken } = require('../middlewares/CsrfMiddleware');

router.use(generateCsrfToken);

router.route('/')
    .get(AuthController.index);

router.route('/login')
    .post(AuthController.login);


module.exports = router;