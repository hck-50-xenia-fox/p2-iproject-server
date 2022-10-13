const express = require('express');
const questionController = require('../controllers/questionController');
const router = express.Router();

router.get('/', questionController.showQuestion)
router.post('/', questionController.addQuestion)

module.exports = router