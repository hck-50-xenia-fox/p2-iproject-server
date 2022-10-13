const express = require('express')
const router = express.Router()
const userRoute = require('./user')
const characterRoute = require('./character')
const summonRoute = require('./summon')










router.get('/', (req, res) => {
    res.send('Uji Coba 2 Hello World!')
})
router.use('/users' ,userRoute)
router.use('/characters', characterRoute)
router.use('/summons', summonRoute)









module.exports = router

