const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    userName : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    priceSpentOnCatagory: {
        type: Map,
        of: Number
    }
    
})

const User = mongoose.model('User', usersSchema);

module.exports = User;