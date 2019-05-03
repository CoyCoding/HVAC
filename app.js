
const path = require('path');
const express = require('express')
const app = express();

global.appRoot = path.resolve(__dirname);

app.use(express.static(appRoot + "/public"));

var main = require('./controllers/main.js');
var testRoute = require('./controllers/products.js');
var pageNotFound = require('./controllers/404.js');

//both index.js and things.js should be in same directory
app.use('/products', testRoute);
app.use('/', main);
app.use('', pageNotFound);


var server = app.listen(8000);
