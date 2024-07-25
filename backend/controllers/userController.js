const mongoose = require('mongoose')
const User = require('../models/usersModel')

const getAllUsers= async (req,res) => {
    try {
        const users = await User.find().select("userName priceSpentOnCatagory");
        console.log(users);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports = {
    getAllUsers
}