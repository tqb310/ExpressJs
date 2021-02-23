const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
//const db = require('../db.js')
const classController = require('../controllers/class.controller.js');


router.get('/', classController.getAllClass);

router.get('/:cId', classController.getClassId);
module.exports = router;