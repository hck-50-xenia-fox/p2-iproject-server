const express = require('express')
const ControllerUser = require('../Controller/ControllerUser')


const router = express.Router()

router.post('/login', ControllerUser)






module.exports = router