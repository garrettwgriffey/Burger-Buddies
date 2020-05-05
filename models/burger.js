var orm = require("../config/orm.js");

// Calls the ORM functions using burger specific input for the ORM
var burgers = {
  all: function(cb) {
    orm.selectAll( function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(vals, cb) {
    orm.insertOne( vals, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.updateOne( id, function(res) {
      cb(res);
    });
  },
};

module.exports = burgers;