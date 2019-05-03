var express = require('express');
var router = express.Router();

// File Not Found - 404 pages needed

router.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

module.exports = router;
