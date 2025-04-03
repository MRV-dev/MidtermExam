const mongoose = require('mongoose');

//create schema for student

const studentSchema = ({
    Course_code:{
        type: Number,
        required: true,
    },

    Grade:{
        type: Number,
        required: true,
    },

    Instructor_Name:{
        type: String,
        required: true,
    },

}, { timestamps: true });

const nameSchema = new mongoose.Schema({
    Course_code: { type: Number, required: true },
    Grade: { type: Number, required: true },
    Instructor_Name: { type: String, required: true },
}, { timestamps: true });


const Student = mongoose.model('student', nameSchema);


// Create the student model based on the schema
const student = mongoose.model('student',nameSchema);

module.exports = student;