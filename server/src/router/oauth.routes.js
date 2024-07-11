const router = require('express').Router();
const OAuthController = require('../controller/OAuthController');

router.route('/')
    .get(OAuthController.index);

router.route('/token')
    .post(OAuthController.token);

router.route('/revoke')
    .post(OAuthController.revoke);

router.route('/userinfo')
    .get(OAuthController.userinfo);

router.route('/introspect')
    .post(OAuthController.introspect);

router.route('/register')
    .post(OAuthController.register);

module.exports = router;
