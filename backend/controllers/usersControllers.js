const User = require('../models/usersModel')

const getAllUsers = async (req,res) => {
    try{
        const usersInfo = await users.find()
        res.status(200).send(usersInfo)
    } catch{
        res.status(500).json({ message: error.message });
    }
}
const getUserCategory = async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const priceSpentOnCategory = user.priceSpentOnCatagory;
      const maxSpentCategory = Object.keys(priceSpentOnCategory).reduce((a, b) => {
        return priceSpentOnCategory[a] > priceSpentOnCategory[b] ? a : b;
      });
  
      return res.json({ category: maxSpentCategory });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllUsers,
    getUserCategory
}