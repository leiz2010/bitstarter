var express = require('express');

var app = express.createServer(express.logger());
//var buffer = new Buffer(16);
var buffer = fs.readFileSync('./index.html');
//var buffer = new Buffer ("what the heck!", "utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
