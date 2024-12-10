const mongoose=require("mongoose")
require("dotenv").config()
mongoose
.connect(process.env.mongo_url)
.then(()=>{
    console.log("db is connected")
})
.catch((error)=>{
    console.log(error)
})