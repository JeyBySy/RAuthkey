const router = require('express').Router();
const AdminController = require('../controller/AdminController');

router.route('/')
    .get(AdminController.index);

router.route('/create_project')
    .post(AdminController.create_project);



module.exports = router;