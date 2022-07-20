const Student = require('../models/studentModel')

// api product data send 
// method get
// link >> http://localhost:5050/api/student
const sendAllStudent = async (req, res) => {
    const allStudent = await Student.find();

    res.status(200).json(allStudent)
}

// post Student Data to mongo
// method post
// link >> http://localhost:5050/api/student
const postStudentData = async (req, res) => {
    console.log('test');

    let img = '1658167280120_baby-5.jpg' // defualt img for postman test
    if(req.file){
        img = req.file.filename
    }

    await Student.create({
        ...req.body,
        photo : img
    })


    res.status(200).json('done')
}





module.exports = {
    sendAllStudent,
    postStudentData
}