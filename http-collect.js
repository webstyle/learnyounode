/**
 * HTTP collect.
 */
var http = require('http');
var bl = require('bl');

http.get(process.argv['2'], function(response) {
  response.setEncoding('utf-8');
  response.pipe(bl(function(err, data) {
    console.log(data.toString().length);
    console.log(data.toString());
  }));
}).on('error', function(err) {
  console.log(err);
});
