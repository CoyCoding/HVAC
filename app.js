
const path = require('path');
const express = require('express')
const app = express();

global.appRoot = path.resolve(__dirname);

app.use(express.static(appRoot+"/public"));

var main = require('./controllers/main.js');
var testRoute = require('./controllers/router0.js');
var router1 = require('./controllers/404.js');

//both index.js and things.js should be in same directory

app.use('/test', testRoute);
app.use('/', main);
app.use('', router1);


var server = app.listen(8000);
