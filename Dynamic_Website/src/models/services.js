const mongoose=require("mongoose")
const Schema = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    textLink:String,
    link:String
})

module.exports=mongoose.model('services',Schema)