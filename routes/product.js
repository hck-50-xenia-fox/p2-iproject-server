const express = require('express');
const router = express.Router()
const productController = require ('../controllers/fetchProduct')
const paymentController = require('../controllers/paymentController');

router.get('/', productController.fetchProduct)
router.post('/', productController.addProduct)
router.post('/payment', paymentController.snapPayment)
module.exports = router