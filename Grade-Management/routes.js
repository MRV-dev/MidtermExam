const express = require('express');
const router = express.Router();
const { createStudent } = require('./controller'); 

// POST route to add a student
router.route('/add').post(createStudent);

module.exports = router;
