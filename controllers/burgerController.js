var express = require("express");

var router = express.Router();

var orm = require("../config/orm.js");

// CRUD

// GET
router.get("/api/burger", function(req, res) {
    const burger_name = req.body.burger_name;

    orm.insertOne(burger_name, function(data) {
        res.json(data);
    });
  });

// READ
router.get("/", function(req, res) {
    orm.selectAll(function(data) {
        res.json(data);
    //   var hbsObject = {
    //     cats: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    });
  });

// UPDATE

// DELETE

// Export router
module.export = router;