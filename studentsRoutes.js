const express = require("express");
const route = express.Router();
const Students = require("../models/students");


route.post("/students", async(req, res)=>{
    const student = new Students(req.body);
    await student.save();
    res.send(student);
});


route.get("/students", async(req,res)=> {
    const students = await Students.find();
    res.send(students);
});

module.exports = route;



