//----------DECLARE-----------
const db = require('../db.js')

//----------CONTROLLER--------
const classController = {
	getAllClass : function(req, res){
		res.render('index', {
			classes: db.get('class').value(),
		});
	},
	getClassId : function(req, res){
		var id = parseInt(req.params.cId);
		res.render('students/index', {
			students: db.get('students').value().filter(item => {return item.cId == id}),
			classes: db.get('class').value().reduce((item1, item2) => {
				 return item1 + (item2.id == id ? item2.class : '');
			}, ''),
			cId: id,
		});				
	}	
}

module.exports = classController;