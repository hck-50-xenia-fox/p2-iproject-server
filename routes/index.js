const express = require('express')
const router = express.Router()
const userRoute = require('./user')
const characterRoute = require('./character')










router.get('/', (req, res) => {
    res.send('Uji Coba 2 Hello World!')
})
router.use('/users' ,userRoute)
router.use('/characters', characterRoute)









module.exports = router

