const express = require('express');
const pokemonController = require('../controllers/pokemonController');
const router = express.Router();

router.get('/', pokemonController.getAllPokemon)
router.get('/:name', pokemonController.getPokemonDetail)

module.exports = router