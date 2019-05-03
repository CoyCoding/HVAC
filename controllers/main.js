const express = require('express');
const path = require('path');
const router = express.Router();


// Base case - Main page html sent

router.get('/', function(req, res){
res.sendFile(path.join(appRoot + '/views/index.html'));
});

// No POST on main page yet might add contact form

router.post('/', function(req, res){
   res.send('POST route on r.');
});

//export this router to use in our app.js
module.exports = router;
