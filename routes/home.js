const express = require('express');
const router = express.Router()
const UserController = require('../controllers/userController');

router.get("/facts", UserController.fetchAnimalFact)
router.get("/image", UserController.fetchImageRandom)

module.exports = router