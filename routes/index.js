const express = require('express');
const MasterController = require('../controllers/masterController');
const router = express.Router()
const authen = require('../middlewares/authentication')

router.post('/register', MasterController.register)

router.post('/login', MasterController.login)




















module.exports = router;