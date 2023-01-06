const express = require("express");
const app = express();
const hbs = require("hbs")
const mongoose = require("mongoose")
const routes=require("./routes/main")
const Detail=require("./models/details")
const Slider=require("./models/slider")
const Services =require("./models/services")
const bodyParser=require("body-parser")


app.use(bodyParser.urlencoded({
    extended:true 
}))
 
app.use("/static",express.static("public"))
app.use("",routes)


// DATABSE CONNECTION
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0/website",()=>{
    console.log("Database connected")
    
// Services.create([
//     {
//     icon:'fab fa-accusoft',
//     title:'Provide Best Courses',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus laborum a quod eaque hic.',
//     textLink:'https://www.youtube.com',
//     link:'Check'
//     },
//     {
//     icon:'fab fa-affiliatetheme',
//     title:'Provide Best Courses 2',
//     description:'2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus laborum a quod eaque hic.',
//     textLink:'https://www.google.com',
//     link:'Check'
//     },
//     {
//     icon:'fab fa-accusoft',
//     title:'Provide Best Courses',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus laborum a quod eaque hic.',
//     textLink:'https://www.youtube.com',
//     link:'Check'
//     },
//     {
//         icon:'fab fa-affiliatetheme',
//         title:'Provide Best Courses 2',
//         description:'2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus laborum a quod eaque hic.',
//         textLink:'https://www.google.com',
//         link:'Check'
//     },
//     {
//     icon:'fab fa-affiliatetheme',
//     title:'Provide Best Courses 2',
//     description:'2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus laborum a quod eaque hic.',
//     textLink:'https://www.google.com',
//     link:'Check'
//     },
//     {
//     icon:'fab fa-accusoft',
//     title:'Provide Best Courses',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus laborum a quod eaque hic.',
//     textLink:'https://www.youtube.com',
//     link:'Check'
//     },
//     {
//         icon:'fab fa-affiliatetheme',
//         title:'Provide Best Courses 2',
//         description:'2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis possimus laborum a quod eaque hic.',
//         textLink:'https://www.google.com',
//         link:'Check'
//     },
// ])



//     Slider.create([{
//         title:"Hello I am Rohit Singh",
//         subTitle:"JavaScript is a very instrasting subject",
//         imageUrl:"./static/Images/1.jpg",
//         class:"active"
//     },
//     {
//         title:"Hello I am Aryan Singh",
//         subTitle:"No Rohit Java is a very instrasting subject",
//         imageUrl:"./static/Images/2.jpg"
//     },
//     {
//         title:"Hello I am Aman Singh",
//         subTitle:"Both are wrong ML is a very instrasting subject",
//         imageUrl:"./static/Images/3.jpg"
//     },
//     {
//         title:"Hello I am Deep Singh",
//         subTitle:"Both are wrong ML is a very instrasting subject",
//         imageUrl:"./static/Images/logo.png"
//     },
// ])


    // Detail.create({
    // brandName:"Rohit Singh",
    // brandIcon:"https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=",
    // link:[{
    //     lable:"Home",
    //     URL:"/",
    // },
    // {
    //     lable:"Services",
    //     URL:"/services",
    // },
    // {
    //     lable:"Gallery",
    //     URL:"/Gallery",
    // },
    // {
    //     lable:"About",
    //     URL:"/About",
    // },
    // {
    //     lable:"Contact Us",
    //     URL:"/Contact Us",
    // },]
    // })
})

app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")



app.listen(4000,()=>{
    console.log("Server Started");
});





