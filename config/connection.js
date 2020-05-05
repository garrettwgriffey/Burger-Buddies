// MySQL connection
var mysql = require("mysql");


var connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
  host: "localhost",
  port: 3306,
  user: "root",
  // user: process.env.USER_NAME,
  password: "root",
  // password: process.env.USER_PWD,
  database: "burger_db"
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