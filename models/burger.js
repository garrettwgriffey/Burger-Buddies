var orm = require("../config/orm.js");

// Calls the ORM functions using burger specific input for the ORM
var burgers = {
  all: function(cb) {
    orm.all( function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create( cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update( objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete( condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burgers;