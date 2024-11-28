const router = require('express').Router();
const RauthKeyController = require('../controller/RauthKeyController');

router.route('/')
    .get(RauthKeyController.index);

router.route('/authorize') //Displays the login/registration page in project's frontend. Requires "authKey", "redirect_url"
    .get(RauthKeyController.authorize);

router.route('/authorize/callback') // /authorize/callback?code=11111111
    .get(RauthKeyController.authorizeCallback);

router.route('/verify-token')
    .post(RauthKeyController.verifyToken);

router.route('/token')
    .post(RauthKeyController.generateToken);

router.route('/authkey/validate')
    .post(RauthKeyController.validateAuthKey);

module.exports = router;
