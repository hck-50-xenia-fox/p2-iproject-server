const express = require('express');
const Controller = require('../controllers/controller');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.post('/refresh', Controller.loginSpotify)
router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.use(authenticate)
router.get('/matches', Controller.matches)
router.get('/tournaments', Controller.tournaments)
router.get('/teams', Controller.teams)
router.get('/heroes', Controller.heroes)
router.post('/search', Controller.search)


module.exports = router