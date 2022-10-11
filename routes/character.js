const express = require('express')
const ControllerCharacter = require('../Controller/ControllerCharacter')



const router = express.Router()

router.get('/', ControllerCharacter.getCharacters)

module.exports = router