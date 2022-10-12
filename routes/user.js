const express = require('express')
const ControllerUser = require('../Controller/ControllerUser')


const router = express.Router()

router.post('/login', ControllerUser.loginUser)
router.post('/register', ControllerUser.registerUser)
router.post('/google-login', ControllerUser.googleLogin)






module.exports = router