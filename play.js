const { connect } = require('./client');
console.log('Attempting connection to game server.');
const client = connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
}

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  } else {
    client.write(data);
  }
};

setupInput();

client.on('connect', () => {
  console.log('Successfully connected to game server.');
});

client.on('data', (data) => {
  console.log('Game Server: ', data);
});
