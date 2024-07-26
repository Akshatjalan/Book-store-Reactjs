const express = require('express');
const router = express.Router();
const bookController = require('../controllers/booksControllers')

router.get('/books',bookController.getAllBook)
router.get('/catagory', bookController.getCatotgory)

module.exports = router
