const express = require('express')
const router = express.Router()
const userRoute = require('./user')










router.get('/', (req, res) => {
    res.send('Uji Coba 2 Hello World!')
})
router.use('/users' ,userRoute)










module.exports = router

