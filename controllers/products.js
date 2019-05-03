const express = require('express');
const router = express.Router();
const path = require('path');

// Products Page
router.get('/', function(req, res){
   res.sendFile(path.join(appRoot + '/views/product.html'));;
});

router.post('/', function(req, res){
   res.send('POST route on things.');
});


//export this router to use in our index.js
module.exports = router;
