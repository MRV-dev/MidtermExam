const Student = require("./model");

// Register Course
exports.registerCourse = async (req, res) => {
  try {
    const { course_code, section, semester } = req.body;
    const studentId = req.params.id;

    // Check if student exists
    const student = await Student.findOne({ student_id: studentId });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Register the course
    student.registered_courses.push({ course_code, section, semester });
    await student.save();

    console.log("Course registered:", course_code);
    res.status(200).json({
      message: ("Course registered Successfully"),
      student_id: student.student_id,
      registered_courses: student.registered_courses
    });

  } catch (error) {
    console.error("Error registering course:", error);
    res.status(500).json({ message: "Server error" });
  }
};