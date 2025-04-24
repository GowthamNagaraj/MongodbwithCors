const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

// db
const db = require('./database/db')

// use
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    exposedHeaders: ['Content-Disposition', 'Access-Control-Allow-Origin'],
    origin:"*"
}))

// routes
app.use('/students',require('./students/students.controller'))

const port = 7500;
app.listen(port,()=>{
    console.log("Server listening "+ port);  
})