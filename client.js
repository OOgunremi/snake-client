const net = require('net');
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log('Testing');
    conn.write('Name: LKN');
    conn.on('data', (data) => {
      console.log('Hello!', data);
    });
  });
};
module.exports = connect;