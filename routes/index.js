const express = require('express');
const router = express.Router();
const midtrans = require('./midtrans.js');
const user = require('./user');
const book = require('./book');

router.use('/midtrans', midtrans);
router.use('/users', user);
router.use('/books', book);

module.exports = router;
