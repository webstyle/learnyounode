var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  fs.createReadStream('baby-step.js', function(src) {
    console.log(src);
  });
})
server.listen(process.argv[2]);
console.log('server is run on', process.argv[2]);
