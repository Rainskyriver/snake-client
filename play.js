const connect = require('./client');
console.log('Connecting...');

const setupInput = function(data) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function(data) {
    if (data === "\u0003") {
      process.stdout.write("Thanks for using me, ciao!\n");
      process.exit();
    }
  }
  stdin.on("data", handleUserInput);
  
  return stdin;
};

setupInput();
connect();