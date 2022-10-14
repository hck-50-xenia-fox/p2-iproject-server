const UserController = require('../controllers/user-controller');
const router = require('express').Router();

router.post('/register', UserController.register);
router.post('/admin-register', UserController.adminRegister);
router.post('/login', UserController.login);
router.post('/google-login', UserController.googleLogin);

module.exports = router;
