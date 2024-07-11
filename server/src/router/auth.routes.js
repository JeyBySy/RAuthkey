const router = require('express').Router();
const AuthController = require('../controller/AuthController');

router.route('/')
    .get(AuthController.index);


module.exports = router;