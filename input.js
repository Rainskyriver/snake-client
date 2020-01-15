const setupInput = function(data) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function(data) {
    if (data === "\u0003") {
      process.stdout.write("Thanks for playing, see you next time!\n");
      process.exit();
    }
  }
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = {setupInput};