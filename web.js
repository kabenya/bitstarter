var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var fileContents = fs.readFile("./index.html");


app.get('/', function(request, response) {
  response.send('Hello1  World 2!');
//  response.send(fileContents.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
