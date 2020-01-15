let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function(data) {
    if (data === "w") {
      connection.write('Move: up');
    }
    if (data === "a") {
      connection.write('Move: left');
    }
    if (data === "s") {
      connection.write('Move: down');
    }
    if (data === "d") {
      connection.write('Move: right');
    }
    if (data === "g") {
      connection.write('Say: GG');
    }
    if (data === "f") {
      connection.write('Say: f in chat');
    }
    if (data === "\u0003") {
      process.stdout.write("Thanks for playing, see you next time!\n");
      process.exit();
    }
  }
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = {setupInput};