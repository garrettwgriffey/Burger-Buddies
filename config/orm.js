// Import MySQL connection
var connection = require("../config/connection.js");
// Helper function for SQL query
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
     
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
     
      arr.push(key + "=" + value);
    }
  }
  
  return arr.toString();
}

// SQL statement functions
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(value, cb){
    var queryString = "INSERT INTO burgers (burger_name) VALUES(?)";
    connection.query(queryString, value, function(err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  updateOne: function(id, cb){
    var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
    connection.query(queryString, id, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};


module.exports = orm;

