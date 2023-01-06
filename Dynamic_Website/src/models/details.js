const mongoose = require("mongoose")
const Detail = mongoose.Schema({
    brandName: String,
    brandIcon: String,
    link:[{
        lable:String,
        URL:String,
    },
    ],
})

module.exports=mongoose.model("details",Detail)