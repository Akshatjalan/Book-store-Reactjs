const Cart = require('../models/cartModel')
const Book = require('../models/booksModel')

const addToCart = async (req,res) => {
    try {
        const {userId , bookId} = req.params
        const {qty} = req.body

        const book = await Book.findById(bookId)

        if(!book){
            return res.status(404).json({message: 'Book not found'})
        }

        const newCart = new Cart({
            userId,
            bookId,
            qty
        })

        if(!newCart){
            return res.status(404).json({message: "Cart not found"})
        }

        await newCart.save()

        res.status(200).json({message: 'Add to Cart successfully'})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    addToCart
}