const express = require("express");
const {
  getTuitionBalance,
} = require("./controller");

const router = express.Router();

router.get("/:id/tuition", getTuitionBalance);

module.exports = router;
