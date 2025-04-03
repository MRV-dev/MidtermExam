const express = require("express");
const {
  getTuitionBalance,
  addStudent,
  updateTuitionBalance,
  deleteStudent,
} = require("./controller");

const router = express.Router();

router.get("/:id/tuition", getTuitionBalance);
router.post("/", addStudent);
router.put("/:id/tuition", updateTuitionBalance);
router.delete("/:id", deleteStudent);

module.exports = router;
