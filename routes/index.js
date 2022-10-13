const express = require('express');
const MasterController = require('../controllers/masterController');
const router = express.Router()
const authen = require('../middlewares/authentication')

router.post('/register', MasterController.register)

router.post('/login', MasterController.login)

router.get('/chessProfile', authen, MasterController.fetchChessProfile)

router.get('/chessStats', authen, MasterController.fetchChessStats)


















module.exports = router;