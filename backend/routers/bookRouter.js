const express = require('express');
const router = express.Router();
const bookController = require('../controllers/booksControllers')

router.get('/books',bookController.getAllBook)
router.get('/category', bookController.getCategory)
router.get('/foryou/:bookFilterMethod/:category',bookController.forYou)

module.exports = router
