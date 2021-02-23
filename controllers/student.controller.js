//----------DECLARE-----------
const shortid = require('shortid');
const db = require('../db.js');

//----------CONTROLLER--------
const studentController = {
	searchStudent : function(req, res){
		var matchedResult = db.get('students').value().filter((student) => {		
			return student.name.toLowerCase().indexOf(req.query.fname.toLowerCase()) > -1 && student.cId == req.params.cId;
		})
		console.log(matchedResult);
		res.render('students/search', {
			students: matchedResult
		});
	},
	getCreate : function(req, res){
		var id = req.params.cId;
		res.render('students/create',{
			cId: id,
		});	
	},
	postCreate : function(req, res){
		req.body.cId = req.params.cId;
		req.body.id = shortid.generate();
		db.get('students').push(req.body).write();
		res.redirect('/class');
	}
}

module.exports = studentController;