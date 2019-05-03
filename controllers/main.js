const express = require('express');
const path = require('path');
const router = express.Router();
//const root = appRoot;

router.get('/', function(req, res){
  res.send('test');
//res.sendFile(path.join(root + '/views/index.html'));
console.log('test');
});

router.post('/', function(req, res){
   res.send('POST route on r.');
});

//export this router to use in our index.js
module.exports = router;
