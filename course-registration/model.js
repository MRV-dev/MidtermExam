const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  registered_courses: [
    {
      course_code: String,
      section: String,
      semester: String,
    }
  ]
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;