const Student = require("./model");

exports.getTuitionBalance = async (req, res) => {
  try {
    console.log("Request received for student:", req.params.id); // Debugging Log

    const student = await Student.findOne({ student_id: req.params.id });

    if (!student) {
      console.log("❌ Student not found in database");
      return res.status(404).json({ message: "Student not found" });
    }

    console.log("✅ Student found:", student);
    return res.status(200).json({
      student_id: student.student_id,
      name: student.name,
      balance: student.balance
    });

  } catch (error) {
    console.error("❌ Error fetching tuition balance:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
