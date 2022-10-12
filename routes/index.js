const express = require('express');
const indexController = require('../controllers/indexController');
const authentication = require('../middleware/authentication');
const router = express.Router();
const pokemonRouter = require('./pokemon')
const questionRouter = require('./question')

router.post('/register', indexController.register);
router.post('/login', indexController.login);

router.use(authentication)
router.post('/register', indexController.updateProfile)
router.use('/pokemons', pokemonRouter)
router.use('/questions', questionRouter)

module.exports = router