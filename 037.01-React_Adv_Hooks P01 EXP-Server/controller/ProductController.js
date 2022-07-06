const Product = require('../models/productModel')
/**

 * @desc get all product data
 * @name GET /student/
 * @access public
 */
const getAllProduct = async (req, res) => {
    // let product = await Product.find();
    // res.render("pro-index", { product })
    // console.log('product');
    res.render("pro-index")
}


/**

 * @desc get all studentes data
 * @name GET /student/create
 * @access public
 */
const showProductAddForm = (req, res) => {

    res.render("pro-create")
}


/**

 * @desc get all studentes data
 * @name GET /student/create
 * @access public
 */
const singleProduct = async (req, res) => {
    // console.log(req.params.id);
    // let id = req.params.id;

    // let singleProduct = await Product.findById(id);
    // res.render("pro-show", { singleProduct });
    res.render("pro-show");
}

/**
 * @desc post student data to detabase
 * @name POST req / 
 * @param {*} res 
 * @param {*} req 
 * @access public
 */
const createProduct = async(req, res) => {
    console.log(req.file.filename);

    await Product.create({
        ...req.body,
        photo : req.file.filename
    })

    // if require stay on this form page 
    // res.render('create')

    // redirect to home page
    res.redirect('/product')
}


/**
 * @desc delete student data to detabase
 * @name DELETE req / 
 * @param {*} res 
 * @param {*} req 
 * @access public
 */
 const deleteProduct = async(req, res) => {
    // console.log(req.file.filename);
    let id = req.params.id;

    await Product.findByIdAndDelete(id )

    res.redirect('/product')
}


/**
 * @desc Edit from page render
 * @name GET req / 
 * @param {*} res 
 * @param {*} req 
 * @access public
 */
const showProductEditForm = async(req, res) => {
    let id = req.params.id;


    // let singleProduct = await Product.findById(id);
    // console.log(singleStudent.id);
    // res.render("pro-edit" , {singleProduct})
    res.render("pro-edit" )

}

/**
 * @desc edit/patch student data to detabase
 * @name POST req / 
 * @param {*} res 
 * @param {*} req 
 * @access public
 */
 const editProduct = async(req, res) => {
    // console.log(req.file.filename);
    let id = req.params.id;
 
console.log(req.file);

    let fileName = req.body.old_photo;

    // Error
    // if(req.file.filename){
    //     fileName = req.file.filename
    // }
    
    if(req.file){
        fileName = req.file.filename
    }

    await Product.findByIdAndUpdate(id , {...req.body,
    photo : fileName }, {
        new :true
    })


    res.redirect('/product')
}






//exports controllers
module.exports = {
    getAllProduct,
    showProductAddForm,
    showProductEditForm,
    deleteProduct,
    editProduct,
    createProduct,
    singleProduct

}