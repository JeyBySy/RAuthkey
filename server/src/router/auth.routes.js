const router = require('express').Router();
const { get_Auth, post_Auth } = require('../controller/AuthController')

router.route('/')
    .get(get_Auth)
    .post(post_Auth)


module.exports = router