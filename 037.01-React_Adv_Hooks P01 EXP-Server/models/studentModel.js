const mongoose = require('mongoose');


const studentSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, "Name is required"],
            trim : true
        },
        email : {
            type : String,
            required : [true, "Email is required"],
            trim : true,
            unique : true
        },
        cell : {
            type : String,
            required : [true, "Cell number is required"],
            unique : true,
            trim : true
        },
        photo :{
            type : String,
            default : 'avater.png'
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('Student', studentSchema);