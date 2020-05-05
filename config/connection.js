// MySQL connection
var mysql = require("mysql");


var connection = mysql.createConnection(
  {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: 3306,
  database: process.env.USER_NAME
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