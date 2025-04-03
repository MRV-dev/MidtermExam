const Student = require('./model');
const mongoose = require('mongoose');

// POST student
const createStudent = async (req, res) => {
    const { Course_code, Grade, Instructor_Name } = req.body;   
    try {
        // Create a new student object
        const student = new Student({
            Course_code,
            Grade,
            Instructor_Name
        });

        // Save the new student
        await student.save();

        // Respond with the created student
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Export the createStudent function
module.exports = { createStudent };
