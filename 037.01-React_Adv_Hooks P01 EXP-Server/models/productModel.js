const mongoose = require('mongoose');


const productSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : [true, "Title is required"],
            trim : true
        },
        category : {
            type : String,
            required : [true , "Category is required" ]
        },
        pro_id : {
            type : Number,
            required : [true, "Product ID is required"],
            trim : true,
            unique : true
        },
        descrip : {
            type : String,
            required : [true, "Description is required"],
            trim : true
        },
        price : {
            type : Number,
            required : [true, "Description is required"],
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

module.exports = mongoose.model('product', productSchema);