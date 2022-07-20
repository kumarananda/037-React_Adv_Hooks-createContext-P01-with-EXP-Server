const Product = require('../models/productModel');

// api product data send 
// link >> http://localhost:5050/api/product
const sendAllProduct = async (req, res) => {
    const allProduct = await Product.find();

    console.log();
    res.status(200).json(allProduct)
}

// post Product Data to mongo
// method post
// link >> http://localhost:5050/api/product
const postProductData = async (req, res) => {
    console.log('test1');

    let img = '1656962749523_camara.jpg' // defualt img for postman test
    if(req.file){
        img = req.file.filename
    }

    await Product.create({
        ...req.body,
        photo : img
    })


    res.status(200).json('done')
}





module.exports = {
    sendAllProduct,
    postProductData
}