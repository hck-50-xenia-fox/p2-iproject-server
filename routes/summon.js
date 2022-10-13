const express = require('express')
const ControllerSummon = require('../Controller/ControllerSummon')




const router = express.Router()

router.get('/', ControllerSummon.getSummons)

module.exports = router