const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: bqfkkhuypiafyzs6vhv2-mysql.services.clever-cloud.com,
  user: uixmtukjmwfh1jk4,
  password: sBvCN0ZbUIGlXThN1C3D,
  database: bqfkkhuypiafyzs6vhv2,
  port: 3306,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

module.exports = db;
