var express = require('express');
var app = express();
var envport = process.env.PORT || 8888;
var instance = process.env.CF_INSTANCE_INDEX;
//var envport = 3000
app.get('/', function (req, res) {
  res.send('<head>Hello World! Instance=' + instance + '</head>');
});

var server = app.listen(envport, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
