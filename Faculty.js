const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
    name: String,
    designation: String,
    salary: Number
});

module.exports = mongoose.model("faculty", FacultySchema);