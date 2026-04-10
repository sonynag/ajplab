const express = require("express");
const route = express.Router();
const Faculty = require("../models/faculty");


// POST faculty
route.post("/faculty", async (req, res) => {
    const faculty = new Faculty(req.body);
    await faculty.save();
    res.send(faculty);
});


// GET all faculty
route.get("/faculty", async (req, res) => {
    const faculty = await Faculty.find();
    res.send(faculty);
});


module.exports = route;