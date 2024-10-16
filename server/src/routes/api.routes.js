const router = require('express').Router();
const ApiController = require('../controller/ApiController');
const { AuthMiddleware } = require('../middlewares/AuthMiddleware');
const { generateCsrfToken, validateCsrfToken } = require('../middlewares/CsrfMiddleware');

router.use(generateCsrfToken);
// router.use(AuthMiddleware);

router.route('/')
    .get(ApiController.index);


router.get('/csrf-token', (req, res) => {
    res.send({ csrfToken: req.session.csrfmiddlewaretoken });
})

// // User Management
// router.route('/users')
//     .get(AuthMiddleware, validateCsrfToken, ApiController.getUsers)
// .post(AuthMiddleware, validateCsrfToken, ApiController.createUser);

// router.route('/users/:id')
//     .get( ApiController.getUserById)
//     .put( validateCsrfToken, ApiController.updateUser)
//     .delete( validateCsrfToken, ApiController.deleteUser);


module.exports = router;