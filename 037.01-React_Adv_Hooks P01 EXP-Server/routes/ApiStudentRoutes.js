const express = require('express');
const { sendAllStudent, postStudentData } = require('../controller/ApiStudentController');
const router =  express.Router();
const multer = require('multer');
const path = require('path');

// config multer
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname,'../assets/upload/student') )
    },
    filename : (req, file, cb) => {
        cb(null, Date.now()+'_'+ file.originalname)
    }

    
})

// load multer
const studenMulter = multer({
    storage : storage
}).single('photo')

router.get('/', sendAllStudent)
router.post('/', postStudentData)



module.exports = router;