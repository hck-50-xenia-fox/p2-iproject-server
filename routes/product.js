const express = require('express');
const router = express.Router()
const productController = require ('../controllers/productController')
const paymentController = require('../controllers/paymentController');

router.get('/', productController.fetchProduct)
router.post('/', productController.addProduct)
router.delete('/:id', productController.deleteProduct)
router.get('/category', productController.fetchCategory)
router.post('/payment', paymentController.snapPayment)
module.exports = router