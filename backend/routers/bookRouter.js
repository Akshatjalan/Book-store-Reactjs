const express = require('express');
const router = express.Router();
const bookController = require('../controllers/booksControllers')

router.get('/books',bookController.getAllBook)
router.get('/catagory', bookController.getCatotgory)
router.get('/book',bookController.forYou)

module.exports = router
