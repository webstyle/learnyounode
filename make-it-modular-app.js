/**
 * MAKE IT MODULAR.
 */
var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, prefix, callback) {
  fs.readdir(dirPath, function(err, files) {
    if (err) {
      callback(err, null);
    } else {
      for (var i = 0; i < files.length; i++) {
        var extname = path.extname(files[i]);
        if (extname == '.' + prefix) {
          callback(null, files[i]);
        } else {
          callback('ext not found', null);
        }
      }
    }
  });
};
