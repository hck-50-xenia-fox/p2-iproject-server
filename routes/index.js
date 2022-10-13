const express = require('express');
const MasterController = require('../controllers/masterController');
const router = express.Router()
const authen = require('../middlewares/authentication')

router.post('/register', MasterController.register)

router.post('/login', MasterController.login)

router.get('/chessProfile', authen, MasterController.fetchChessProfile)

router.get('/chessStats', authen, MasterController.fetchChessStats)

router.get('/top10Player', MasterController.fetchTopPlayer)

router.get('/getStreamer', MasterController.fetchStreamer)

router.get('/getPuzzle', MasterController.fetchPuzzle)

router.get('/youtube', MasterController.fetchDataYoutube)









module.exports = router;