const MidtransController = require('../controllers/midtrans-controller');
const router = require('express').Router();

router.post('/pay', MidtransController.pay);

module.exports = router;
