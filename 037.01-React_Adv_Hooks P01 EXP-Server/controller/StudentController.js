const Student = require('../models/studentModel')
/**

 * @desc get all studentes data
 * @name GET /student/
 * @access public
 */
const getAllStudents = async (req, res) => {
    console.log('ananda');
    let student = await Student.find();
    res.render("stu-index", { student })
}


/**

 * @desc get all studentes data
 * @name GET /student/create
 * @access public
 */
const showStudentAddForm = (req, res) => {

    res.render("stu-create")
}


/**

 * @desc get all studentes data
 * @name GET /student/create
 * @access public
 */
const singleStudent = async (req, res) => {
    // console.log(req.params.id);
    let id = req.params.id;

    let singleStudent = await Student.findById(id);
    res.render("stu-show", { singleStudent });
}

/**
 * @desc post student data to detabase
 * @name POST req / 
 * @param {*} res 
 * @param {*} req 
 * @access public
 */
const createStudents = async(req, res) => {
    // console.log(req.file.filename);

    await Student.create({
        ...req.body,
        photo : req.file.filename
    })

    // if require stay on this form page 
    // res.render('create')

    // redirect to home page
    res.redirect('/student')
}


/**
 * @desc delete student data to detabase
 * @name DELETE req / 
 * @param {*} res 
 * @param {*} req 
 * @access public
 */
 const deleteStudents = async(req, res) => {
    // console.log(req.file.filename);
    let id = req.params.id;

    await Student.findByIdAndDelete(id )

    res.redirect('/student')
}


/**
 * @desc Edit from page render
 * @name GET req / 
 * @param {*} res 
 * @param {*} req 
 * @access public
 */
const showStudentEditForm = async(req, res) => {
    let id = req.params.id;


    let singleStudent = await Student.findById(id);
    // console.log(singleStudent.id);
    res.render("stu-edit" , {
        singleStudent
    })

}

/**
 * @desc edit/patch student data to detabase
 * @name POST req / 
 * @param {*} res 
 * @param {*} req 
 * @access public
 */
 const editStudents = async(req, res) => {
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

    await Student.findByIdAndUpdate(id , {...req.body,
    photo : fileName }, {
        new :true
    })


    res.redirect('/student')
}






//exports controllers
module.exports = {
    getAllStudents,
    showStudentAddForm,
    createStudents,
    singleStudent,
    deleteStudents,
    showStudentEditForm,
    editStudents
}