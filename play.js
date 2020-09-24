const {connect} = require('./client');
const {setupInput} = require('./input');
console.log('Attempting connection to game server.');
const client = connect();

setupInput();

client.on('data', (data) => {
  console.log('Game Server: ', data);
});
