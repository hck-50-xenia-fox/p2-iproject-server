const express = require('express');
const Controller = require('../controllers/controller');
const authen = require('../middlewares/auth');
const errorHandler = require('../middlewares/errorHandler');

const router = express.Router();

router.post('/login',Controller.login)
router.post('/register',Controller.regist)

router.use(errorHandler)


module.exports = router