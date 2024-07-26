const mongoose = require('mongoose')

const booksSchema = mongoose.Schema({
    bookName : {
        type : String,
        required: true
    },
    catagory : [{
        type : String
    }],
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    priceSpentOnBook:{
        type: Number,
    },
    dateOfLastOfBuy:{
        type: Date
    }
})

const Book = mongoose.model('Book', booksSchema);

module.exports = Book;