const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', (data) => {
    console.log('Connected!');
    conn.write('Name: LRY');
    setInterval(() => {
      conn.write('Move: left');
    }, 50)
  });
  
  conn.on('data', (data) => {
    console.log('Server says...', data);
  });

  return conn;
};

module.exports = { connect };