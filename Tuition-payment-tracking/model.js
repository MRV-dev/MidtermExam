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
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
