const express = require("express");
const morgan = require("morgan")
require("./db/dbConnection");
require("dotenv").config();
var cors = require('cors');


const EmployeRoute=require('./route/employeeRoute')

require('dotenv').config();




const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use('/api',EmployeRoute);
const UserRoute = require('./route/userroutes')
app.use('/user',UserRoute)
app.listen(process.env.port ,()=>{

    console.log(`Listening to port ${process.env.port }`)
})
