const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
name:String,
email:String,
address:String,
phone:String,
password:String,
userType: { type: String, required: true }, 


})

const UserData=mongoose.model('userdata',UserSchema);

module.exports= UserData;