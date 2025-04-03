const express = require ("express");
const { registerCourse } = require("./controller");

const router = express.Router();

// Register a course
router.post("/:id/registercourse", registerCourse);

module.exports = router;