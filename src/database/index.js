const mysql = require('mysql2/promise');

async function connect() {
  if (global.connection && global.connection.state !== 'disconnected') { return global.connection; }

  const connection = mysql.createConnection('mysql://root:@localhost:3306/barbecue');
  global.connection = connection;
  console.log('connected');
  return global.connection;
}

module.exports = connect;
