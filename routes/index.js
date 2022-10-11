const express = require('express');
const indexController = require('../controllers/indexController');
const authentication = require('../middleware/authentication');
const router = express.Router();

router.post('/register', indexController.register);
router.post('/login', indexController.login);

router.use(authentication)

module.exports = router