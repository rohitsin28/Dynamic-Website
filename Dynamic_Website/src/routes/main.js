const express = require("express");
const { route } = require("express/lib/application")
const routes = express.Router()
const Detail = require("../models/details");
const Slider = require("../models/slider")
const Services = require("../models/services")
const Contact = require("../models/contact")
const GRegistration = require("../models/galleryReg");

routes.get("/", async (req, resp) => {
    const details = await Detail.findOne({ "_id": "6394cf3d355516dfa47987df" })
    const slides = await Slider.find()
    const services = await Services.find()
    resp.render("index", {
        details: details,
        slides: slides,
        services: services
    })
})

routes.get("/gallery", async (req, resp) => {
    const details = await Detail.findOne({ "_id": "6394cf3d355516dfa47987df" })
    const slides = await Slider.find()
    const registration = await GRegistration.find()
    resp.render("gallery", {
        details: details,
        slides: slides,
        galleryReg: registration
    })
})

// Process contact form
routes.post("/process-contact-form", async (req, resp) => {
    console.log("Form is submitted")
    console.log(req.body)
    //  save the data to db
    try {
        const data = await Contact.create(req.body)
        resp.redirect("/")
    } catch (e) {
        console.log(e)
        resp.redirect("/")
    }
})

routes.post("/gallery_registration", async (req, resp) => {
    console.log("Form is submitted")
    console.log(req.body)
    try {
        const data = await GRegistration.create(req.body)
        resp.redirect("/gallery")
    } catch (e) {
        console.log(e)
        resp.redirect("/gallery")
    }
})

module.exports = routes
