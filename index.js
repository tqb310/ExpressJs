/*const pug = require('pug');

const CompiledFunction = pug.compileFile('index.pug');

console.log(CompiledFunction({
	name: 'Truong Quoc Bao',
}));*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db.js');
const classRouter = require('./routes/class.route');
const studentRouter = require('./routes/student.route');
const port = 3050;

//--Set view engine Pug
app.set('view engine','pug');
app.set('views','./views');

//--Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/class', classRouter);

app.use('/students', studentRouter)

app.listen(port, () => {
	console.log('Server listening on port ' + port);
});








