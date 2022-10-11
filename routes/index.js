const express = require('express');
const router = express.Router();
const midtrans = require('./midtrans.js');

router.use('/midtrans', midtrans);

module.exports = router;
