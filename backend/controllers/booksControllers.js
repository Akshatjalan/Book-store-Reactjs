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
const forYou = async (req, res) => {
    try {
        const { bookFilterMethod,category } = req.body;

        console.log(bookFilterMethod);
        const currentDate = new Date();

        if (bookFilterMethod === "Less Than 6 months") {
            const sixMonthsAgo = new Date(currentDate);
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
            console.log("Six months ago:", sixMonthsAgo);

            let lessthan6MonthsBooks = await Book.find({ dateOfLastBuy: { $gte: sixMonthsAgo } });
            if(category==="0"){
                console.log("Books less than 6 months old:", lessthan6MonthsBooks);
                res.status(200).json(lessthan6MonthsBooks);
            }
            else{
            lessthan6MonthsBooks = lessthan6MonthsBooks.filter(book => book.category === category);
            console.log("Books less than 6 months old:", lessthan6MonthsBooks);
            res.status(200).json(lessthan6MonthsBooks);
            }
            // const filter = category ? { $and: [{ dateOfLastBuy: { $gte: sixMonthsAgo }}, {category: category}] } : { dateOfLastBuy: { $gte: sixMonthsAgo } };
            // const lessthan6MonthsBooks = await Book.find(filter);
        }if (bookFilterMethod === "Between 6 months and 1 Year") {
        const oneYearAgo = new Date(currentDate);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const sixMonthsAgo = new Date(currentDate);
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        console.log("One year ago:", oneYearAgo);
        console.log("Six months ago:", sixMonthsAgo);

        let between6M1YBooks = await Book.find({ $and: [{ dateOfLastBuy: { $lte: sixMonthsAgo } },{ dateOfLastBuy: { $gte: oneYearAgo } }] });
        if(category==="0"){
            console.log("Books between 6 months and 1 year old:", between6M1YBooks);
            res.status(200).json(between6M1YBooks);
        }
        else{
            between6M1YBooks = between6M1YBooks.filter(book => book.category === category);
        console.log("Books between 6 months and 1 year old:", between6M1YBooks);
        res.status(200).json(between6M1YBooks);
        }

        }if (bookFilterMethod === "More Than a Year") {
        const oneYearAgo = new Date(currentDate);
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        console.log("One year ago:", oneYearAgo);

        let oldBooks = await Book.find({ dateOfLastBuy: { $lt: oneYearAgo } });
        if(category==="0"){
            console.log("Books older than 1 year:", oldBooks);
            res.status(200).json(oldBooks);
        }
        else{
        oldBooks = oldBooks.filter(book => book.category === category);
        console.log("Books older than 1 year:", oldBooks);
        res.status(200).json(oldBooks);
        }
        }
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
};




module.exports = {
    getAllBook,
    getCatotgory,
    forYou
}