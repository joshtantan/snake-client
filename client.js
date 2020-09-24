const net = require('net');

const connect = function() {
  const conn = net.createConnection({  
    host: '192.168.1.73',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
  });

  conn.setEncoding('utf8'); 
  conn.write("Name: JLT");
  return conn;
}

module.exports = {connect};
