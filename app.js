const teltonika = require('teltonika-parser-ex');

const net = require('net');

const server = net.createServer(socket => {
  console.log('GPS connected');

  socket.on('data', data => {
    console.log('Data received:', data);

    // Parse the data using Teltonika-parser-ex
    const gpsData = teltonika.parse(data);
    console.log('GPS data:', gpsData);
  });

  socket.on('close', () => {
    console.log('GPS disconnected');
  });
});

server.listen({host: '0.0.0.0', port: PORT }, () => {
  console.log(`Server listening`);
});