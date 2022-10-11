const express = require('express')
const ControllerUser = require('../Controller/ControllerUser')


const router = express.Router()

router.post('/login', ControllerUser.loginUser)
router.post('/register', ControllerUser.registerUser)






module.exports = router