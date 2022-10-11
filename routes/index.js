const express = require('express');
const router = express.Router();
const midtrans = require('./midtrans.js');
const user = require('./user');

router.use('/midtrans', midtrans);
router.use('/users', user);

module.exports = router;
