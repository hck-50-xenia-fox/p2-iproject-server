const express = require('express');
const router = express.Router();
const productRoute = require('./product');
const registerRoute = require('./register');
const loginRoute = require('./login');
const homeRoute = require('./home');
const { authentication } = require('../middlewares/authentication');


router.use('/login', loginRoute)
router.use('/register', registerRoute)
router.use("/home", homeRoute)
router.use(authentication)
router.use('/product', productRoute)

module.exports = router
