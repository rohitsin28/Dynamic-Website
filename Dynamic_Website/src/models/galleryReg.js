const mongoose=require("mongoose")
const GReg=mongoose.Schema({
    name:String,
    course:String,
    email:String,
    password:String,
    city:String,
    state:String,
    pinCode:String,
    address:String
})

module.exports=mongoose.model('registration',GReg)