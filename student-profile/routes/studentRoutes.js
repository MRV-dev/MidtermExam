const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentcontrollers');

router.get('/student/:id', studentController.getStudentProfile);

module.exports = router;