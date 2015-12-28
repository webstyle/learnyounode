/**
 * Time server
 */
var net = require('net');
var server = net.createServer(function(socket) {
  var date = new Date();
  var month = 
  socket.write(date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes());
  socket.end("");
});
server.listen(process.argv[2]);

var time = new Date()
