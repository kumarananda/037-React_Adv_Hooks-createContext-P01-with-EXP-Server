const express = require('express');
const { getAllStudents, createStudents, showStudentAddForm, singleStudent, showStudentEditForm, editStudents, deleteStudents } = require('../controller/StudentController');
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

// router.route('/').get(getAllStudents);
// router.route('/create').get(createStudents);
router.get('/', getAllStudents )
router.post('/',studenMulter, createStudents )
router.get('/create', showStudentAddForm )
router.get('/edit/:id', showStudentEditForm )
router.get('/delete/:id', deleteStudents )

router.post('/edit/:id', studenMulter,  editStudents )
router.get('/:id', singleStudent )




module.exports = router;