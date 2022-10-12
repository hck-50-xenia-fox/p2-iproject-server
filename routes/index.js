const express = require('express')
const router = express.Router()
const motorcycleRoute = require('./motorcycleRoute')
// const userRoute = require('./userRoute')

router.use('/motorcycles', motorcycleRoute)
// router.use('/', userRoute)

module.exports = router