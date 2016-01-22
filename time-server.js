/**
 * Time server
 */
var net = require('net');
var server = net.createServer(function(socket) {
  var date = new Date();
  socket.write(
    date.getFullYear() +
    "-" +
    12 +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes());
  socket.end("");
});
server.listen(process.argv[2]);

var time = new Date()
