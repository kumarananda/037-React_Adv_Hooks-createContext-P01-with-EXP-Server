const { bgBlue } = require('colors');
const mongoose = require('mongoose');
// const dotenv = require('dotenv').config()

// connection mongodb
const mongooseConncet = async() => {

    try {
        await mongoose.connect(process.env.MONGO_STRING);

        console.log('Mongo connect is ready' .bgCyan );
    }catch (error){
        console.log(`${error}` .bgRed .black);
    }
}


// export connection 
module.exports = mongooseConncet