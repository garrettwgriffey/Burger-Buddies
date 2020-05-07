// MySQL connection
var mysql = require("mysql");
require("dotenv").config();


var connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: 3306,
  database: process.env.DB_DB
});

// Makes Connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection to the ORM
module.exports = connection;