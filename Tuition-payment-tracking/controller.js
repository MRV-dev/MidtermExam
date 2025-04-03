const Student = require("./model");

// Get tuition balance
exports.getTuitionBalance = async (req, res) => {
  try {
    const student = await Student.findOne({ student_id: req.params.id });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ student_id: student.student_id, name: student.name, balance: student.balance });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Add a new student
exports.addStudent = async (req, res) => {
  try {
    const { student_id, name, balance } = req.body;
    const student = new Student({ student_id, name, balance });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: "Error adding student" });
  }
};

// Update tuition balance
exports.updateTuitionBalance = async (req, res) => {
  try {
    const { balance } = req.body;
    const student = await Student.findOneAndUpdate(
      { student_id: req.params.id },
      { balance },
      { new: true }
    );
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Error updating balance" });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndDelete({ student_id: req.params.id });
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student" });
  }
};
