const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController');

router.post('/', UserController.loginPost)
router.post('/googleLogin', UserController.googleLogin)

module.exports = router