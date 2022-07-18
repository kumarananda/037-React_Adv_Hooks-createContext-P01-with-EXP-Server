const express = require('express');
const router =  express.Router();
const { sendAllProduct } = require('../controller/ApiProductController');
const multer = require('multer');
const path = require('path');


// config multer
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname,'../assets/upload/product') )
    },
    filename : (req, file, cb) => {
        cb(null, Date.now()+'_'+ file.originalname)
    }
    
})

// load multer
const productMulter = multer({
    storage : storage
}).single('photo')

// router.route('/').get(getAllStudents);
// router.route('/create').get(createStudents);

// router.get('/', getAllProduct )
// router.post('/',productMulter, createProduct )
// router.get('/create', showProductAddForm )
// router.get('/edit/:id', showProductEditForm )
// router.get('/delete/:id', deleteProduct )

// router.post('/edit/:id', productMulter,  editProduct )
// router.get('/:id', singleProduct )

router.get('/', sendAllProduct)




module.exports = router;