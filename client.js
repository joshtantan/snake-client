const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({  
    host: '192.168.1.73',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.write("Name: JLT");

  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 500);

  // setInterval(() => {
  //   conn.write("Move: left");
  // }, 1000);

  return conn;
}

module.exports = {connect};
