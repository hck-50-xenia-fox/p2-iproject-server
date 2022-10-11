const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const registerRoute = require('./register');
const loginRoute = require('./login');

router.use('/login', loginRoute)
router.use('/register', registerRoute)
router.use('/product', productRoute)

module.exports = router
