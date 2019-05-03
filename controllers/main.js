const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();

app.use(express.static(appRoot+"/public"));

router.get('/', function(req, res){
  res.sendFile(path.join(appRoot + '/views/index.html'));
});

router.post('/', function(req, res){
   res.send('POST route on r.');
});

//export this router to use in our index.js
module.exports = router;
