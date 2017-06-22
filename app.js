var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});




app.use(express.static('public'));

console.log(process.env.PORT);
app.listen(process.env.PORT);
