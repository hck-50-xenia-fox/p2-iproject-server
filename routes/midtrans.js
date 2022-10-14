const MidtransController = require('../controllers/midtrans-controller');
const authentication = require('../middlewares/auth');
const router = require('express').Router();

router.use(authentication);
router.post('/pay', MidtransController.pay);

module.exports = router;
