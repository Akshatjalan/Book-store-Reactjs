const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    bookId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Book'
    },
    qty : {
        type : Number,
        required : true
    }
})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;