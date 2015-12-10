var fs = require('fs');
var file = process.argv['2'];

fs.readFile(file, 'utf-8', function(err, data) {
  if (err) console.error(err);
  var str = data.toString().split('\n');
  console.log(str.length - 1);
});
