const dotenv = require("dotenv");
const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require("./config/db");
const path = require("path");

//dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express()

// middlewares
app.use(express.json()) 
app.use(morgan("dev")) // log every request to the console

// routes   
app.use('/api/v1/user',require('./routes/userRoutes'))
app.use('/api/v1/admin',require('./routes/adminRoutes'))
//Port
const port = process.env.PORT || 8080

// listen port
app.listen(port, ()=>{
    console.log(
        `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
        .bgCyan.white
    )
})





