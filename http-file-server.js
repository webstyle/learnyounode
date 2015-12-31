var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  var file = fs.createReadStream(process.argv[3]);
  file.pipe(res);
});
server.listen(process.argv[2]);
console.log('server is run on', process.argv[2]);
