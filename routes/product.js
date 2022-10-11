const express = require('express');
const router = express.Router()
const productController = require ('../controllers/fetchProduct')

router.get('/', productController.fetchProduct)

module.exports = router