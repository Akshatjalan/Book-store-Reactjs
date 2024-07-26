const Book = require('../models/booksModel')

const getAllBook = async(req,res) => {
    try {
        const books = await Book.find()
        console.log(books);
        if(books.length <= 0){
            return res.status(404).json({message: "Books Not Found"})
        }

        res.status(200).json(books)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getCatotgory = async(req,res) => {
    try{
        const catagory = await Book.find().select('catagory')

        if(catagory.length <= 0){
            res.status(404).json({message: "Catagory not found"})
        }

        res.status(200).json(catagory)

    }catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getAllBook,
    getCatotgory
}