var express = require("express");

var router = express.Router();

var orm = require("../config/orm.js");

// CRUD

// GET

// READ
router.get("/", function(req, res) {
    orm.selectAll(function(data) {
    //   var hbsObject = {
    //     cats: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    });
  });

// UPDATE

// DELETE