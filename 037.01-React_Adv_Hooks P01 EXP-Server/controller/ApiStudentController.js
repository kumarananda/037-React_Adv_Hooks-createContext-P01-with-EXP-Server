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
const postStudentData = (req, res) => {
    console.log('test');
    res.status(200).json()
}





module.exports = {
    sendAllStudent,
    postStudentData
}