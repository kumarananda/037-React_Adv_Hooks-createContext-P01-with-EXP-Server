const Product = require('../models/productModel');

// api product data send 
// link >> http://localhost:5050/api/product
const sendAllProduct = async (req, res) => {
    const allProduct = await Product.find();

    console.log();
    res.status(200).json(allProduct)
}





module.exports = {
    sendAllProduct
}