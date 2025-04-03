const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// POST: Register a Student
router.post("/register", async (req, res) => {
    try {
        const { student_id, name, email, program, year_level } = req.body;

        // Check if student already exists
        let existingStudent = await Student.findOne({ student_id });
        if (existingStudent) return res.status(400).json({ message: "Student already exists" });

        // Create a new student
        const newStudent = new Student({ student_id, name, email, program, year_level });
        await newStudent.save();

        res.status(201).json({ message: "Student enrolled successfully", student: newStudent });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

module.exports = router;
