const express = require('express');
const router = express.Router();
const cartContoller = require('../controllers/cartControllers')

router.post('/:userId/cart/:bookId',cartContoller.addToCart)

module.exports = router