const mongoose = require("mongoose");

// Define the Student Schema
const StudentSchema = new mongoose.Schema({
    student_id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    program: { type: String, required: true },
    year_level: { type: Number, required: true }
});

module.exports = mongoose.model("Student", StudentSchema);
