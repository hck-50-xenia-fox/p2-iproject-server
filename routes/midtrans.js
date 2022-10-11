const MidtransController = require('../controllers/midtransController');
const router = require('express').Router();

router.post('/pay', MidtransController.pay);

module.exports = router;
