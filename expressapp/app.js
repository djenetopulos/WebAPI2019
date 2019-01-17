var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/about', function(req, res){
    res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname+'/contact.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);
console.log("Running on port 3000");