// {"ipaddress":"80.12.33.34","language":"fr-FR","software":"Macintosh; Intel Mac OS X 10_11_5"}

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  var ip = req.headers.host;
  var language = req.headers['accept-language']; 
  var software = req.headers['user-agent'];
  ip = ip.substr(0, ip.indexOf(":"));
  software = software.match( /\((.*?)\)/ )[1];
  res.json({'ipaddress': ip, 'language': language, 'software': software});
});

app.listen(port, function () {
  console.log('Node.js listening on port ' + port + '...');
});
