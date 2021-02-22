const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('../db.js')
const data = require('../data')

var students = data.students;
var classes = data.classes;
router.get('/', (req, res) => {
	res.render('index', {
		classes: classes
	});
});

router.get('/:cId', (req, res) => {
	var id = parseInt(req.params.cId);
	res.render('students/index', {
		students: students.filter(item => {return item.cId == id}),
		classes: classes.reduce((item1, item2) => {
			 return item1 + (item2.id == id ? item2.class : '');
		}, '')
	});
});
module.exports = router;