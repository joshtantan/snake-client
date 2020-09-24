const net = require('net');
const { IP, PORT, NAME } = require('./constants');

const connect = function() {
  const conn = net.createConnection({  
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
  });

  conn.setEncoding('utf8'); 
  conn.write(`Name: ${NAME}`);
  return conn;
}

module.exports = {connect};
