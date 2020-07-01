const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


const todoRoutes =require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req,res) =>{

	res.sendFile("index.html");

});



app.use('/api/todos', todoRoutes);




app.listen(port, () => {

	console.log(`Server is running at Port : ${port}`);

});