const mongoose = require('mongoose')

const navbarOfferSchema = mongoose.Schema({
    userId : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }],
    bookId : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Book'
    }],
    category:{
        type: String,
        required: true
    },
    offer : {
        type : String,
        required : true,
        enum: ["Rent","Discount","Gift"]
    }
})

const navbarOffer = mongoose.model('navbarOffer', navbarOfferSchema);

module.exports = navbarOffer;