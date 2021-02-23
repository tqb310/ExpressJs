const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
//const db = require('../db.js')
const studentController = require('../controllers/student.controller.js')

router.get('/:cId/Search', studentController.searchStudent);

router.get('/:cId/create', studentController.getCreate);

router.post('/:cId/create', studentController.postCreate);

module.exports = router;