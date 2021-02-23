const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
db = lowdb(adapter);

db.defaults({ students: [], 		     
			  class: [
			  	{id: 1, class:'12A1'},
				{id: 2, class:'12A2'},
				{id: 3, class:'12A3'},
			  ]
			}).write();

module.exports = db;