const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers')

router.get('/allUsers',usersControllers.getAllUsers)
router.get('/getUserCategory/:userId',usersControllers.getUserCategory)


module.exports = router
