const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('../db.js')
const data = require('../data');

var students = data.students;
router.get('/Search', (req, res) => {
	var matchedResult = students.filter((student) => {		
		return student.name.toLowerCase().indexOf(req.query.fname.toLowerCase()) > -1;
	})
	res.render('students/search', {
		students: matchedResult
	});
});

router.get('/create', (req, res) => {
	res.render('students/create')
})

router.post('/create', (req, res) => {
	students.push(req.body);
	res.redirect('/class');
})

module.exports = router;