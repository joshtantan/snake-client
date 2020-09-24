const { connect } = require('./client');
console.log('Attempting connection to game server.');
const client = connect();

client.on('connect', () => {
  console.log('Successfully connected to game server.');
});

client.on('data', (data) => {
  console.log('Game Server: ', data);
});

// stdin.on('data', (data) => {
//   if (data === '\\q\n') {
//     process.exit();
//   }

//   client.write(data);
// })