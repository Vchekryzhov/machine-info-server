var udp = require('dgram');
// --------------------creating a udp server --------------------
// creating a udp server
var server = udp.createSocket('udp4');
// emits when any error occurs
server.on('error', function(error) {
  console.log('Error: ' + error);
  server.close();
});
// emits on new datagram msg
server.on('message', function(msg, info) {
  console.log('Data received from client : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);

  //sending msg
  server.send('is machine info server', 5555, info.address, function(error) {
    if (error) {
      client.close();
    } else {
      console.log('Data sent !!!');
    }

  });

});
//emits after the socket is closed using socket.close();
server.on('close', function() {
  console.log('Socket is closed !');
});

server.bind(5555);