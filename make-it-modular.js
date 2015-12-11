/**
 * Make it modular
 */
var app = require('./make-it-modular-app.js');

app(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
