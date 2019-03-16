var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
  res.send('Home');
});
app.get('/image', function(req, res){
    var image = req.query.name;
    res.sendFile(path.join(__dirname,`./assets/${image}.jpg`));
    console.log(path);
});
app.listen(5000);