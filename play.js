const { connect } = require('./client');
console.log('Connecting ...');
const client = connect();

client.on('connect', () => {
  console.log('Successfully connected to server.');
});

client.on('data', (data) => {
  console.log('Server says: ', data);
});
