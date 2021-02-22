/*const pug = require('pug');

const CompiledFunction = pug.compileFile('index.pug');

console.log(CompiledFunction({
	name: 'Truong Quoc Bao',
}));*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
db = lowdb(adapter);

db.defaults( { students: [] } ).write();
const port = 3050;

var classes =  [
			{id: 1, class:'12A1'},
			{id: 2, class:'12A2'},
			{id: 3, class:'12A3'},
		]
var students = [
			{id: 1, name:'Truong Quoc Bao', cId:3},
			{id: 2, name:'Nguyen Gia Huy', cId:3},
			{id: 3, name:'Vo Ngoc Tan', cId:2},
			{id: 4, name:'Nguyen Thi Ngoc Hue', cId:2},
			{id: 5, name:'Vo Tran Chuong', cId:1},
			{id: 6, name:'Dang Ngoc Liem', cId:1},
]
//--Set view engine Pug
app.set('view engine','pug');
app.set('views','./views');

//--Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
	res.render('index', {
		classes: classes
	});
});

app.get('/:cId', (req, res) => {
	var id = parseInt(req.params.cId);
	res.render('students/index', {
		students: students.filter(item => {return item.cId == id}),
		classes: classes.reduce((item1, item2) => {
			 return item1 + (item2.id == id ? item2.class : '');
		}, '')
	});
});

app.get('/students/Search', (req, res) => {
	var matchedResult = students.filter((student) => {		
		return student.name.toLowerCase().indexOf(req.query.fname.toLowerCase()) > -1;
	})
	res.render('students/search', {
		students: matchedResult
	});
});

app.get('/students/create', (req, res) => {
	res.render('students/create')
})

app.post('/students/create', (req, res) => {
	req.body.id 
	db.get("students").push(req.body).write();
	res.redirect('/students');
})
app.listen(port, () => {
	console.log('Server listening on port ' + port);
});








