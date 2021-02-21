/*const pug = require('pug');

const CompiledFunction = pug.compileFile('index.pug');

console.log(CompiledFunction({
	name: 'Truong Quoc Bao',
}));*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3050;
var students = [
			{id: 1, name:'Truong Quoc Bao', cId: 3},
			{id: 2, name:'Nguyen Gia Huy', cId: 3},
			{id: 3, name:'Tran Quoc Khanh', cId: 3},
			{id: 4, name:'Nguyen Thi Ngoc Hue', cId: 2},
			{id: 5, name:'Vo Ngoc Tan', cId: 2},
			{id: 6, name:'Dang Ngoc Liem', cId: 1},
			{id: 7, name:'Nguyen Quoc Trong', cId: 1},
		];
var classes =  [
			{id: 1, class:'12A1'},
			{id: 2, class:'12A2'},
			{id: 3, class:'12A3'},
		]
//--Set view engine Pug
app.set('view engine','pug');
app.set('views','./views');
//-Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
	res.render('index', {
		classes: classes
	});
});

app.get('/students', (req, res) => {

	res.render('students/index', {
		students: students,
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
	students.push(req.body);
	res.redirect('/students');
})
app.listen(port, () => {
	console.log('Server listening on port ' + port);
});








