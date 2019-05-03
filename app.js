var express = require('express')
var app = express();

//app.use(express.static('main'));

var main = require('./server/main.js');
var testRoute = require('./server/router0.js');
var router1 = require('./server/404.js');

//both index.js and things.js should be in same directory
app.use('/test', testRoute);
app.use('/', main);
app.use('', router1);


var server = app.listen(8000);
