/*const pug = require('pug');

const CompiledFunction = pug.compileFile('index.pug');

console.log(CompiledFunction({
	name: 'Truong Quoc Bao',
}));*/

const express = require('express');
const app = express();
const port = 3050;

app.set('view engine','pug');
app.set('views','./views');

app.get('/', (req, res) => {
	res.render('index', {
		classes: '12A3',
	});
});

app.get('/students', (req, res) => {
	res.render('students/index', {
		users: [
			{id: 1, name:'Truong Quoc Bao'},
			{id: 2, name:'Nguyen Gia Huy'},
			{id: 3, name:'Tran Quoc Khanh'}
		]
	});
});

app.listen(port, () => {
	console.log('Server listening on port ' + port);
});








