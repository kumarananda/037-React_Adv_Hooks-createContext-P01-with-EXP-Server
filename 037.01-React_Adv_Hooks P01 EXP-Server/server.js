const dotenv = require('dotenv').config();
const path = require('path');
const colors = require('colors')
const express = require('express');

const expressEjsLayouts = require('express-ejs-layouts');
const mongooseConncet = require('./config/db');
const app = express();



// body data for send data to mongodb from req.body
app.use(express.json());
app.use(express.urlencoded({extended : false}))


// environment variables for env file
const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000;

// Mongo server connet 
mongooseConncet();

// static folders for public routes
app.use('/assets',express.static(path.join(__dirname, '/assets')));



// ejs setup
app.set("view engine", "ejs");
app.set("layout", "layouts/app.ejs");
app.use(expressEjsLayouts);

// routes
app.use('/product', require('./routes/ProductRoutes')) 
app.use('/student', require('./routes/StudentRoutes'))





// server listen
app.listen(PORT, () => console.log(`Server is running on port http//localhost:${PORT}`.bgGreen.white))



