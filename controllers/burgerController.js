var express = require("express");

var router = express.Router();

var orm = require("../config/orm.js");
var burger = require("../models/burger.js")

// CREATE
router.post("/api/burger", function(req, res) {
    const burger_name = req.body.burger_name;

    orm.insertOne(burger_name, function(data) {
        if (data.affectedRows === 1) {
            res.json({
                msg: "Burger succesfully added."
            });
        }
    });
});

// READ
router.get("/", function(req, res) {
    orm.selectAll(function(data) {
        res.render("index", { burgers: data})
    });
  });

// UPDATE
router.put("/api/burger/id:", function(req, res) {
    const id = req.params.id;

    orm.updateOne(id, function(data) {
        if (data.affectedRows === 1) {
            res.json({
                msg: "Burger succesfully updated."
            });
        }
    });
});

// DELETE
router.delete("/api/burger/id:", function(req, res) {
    const id = req.params.id;

    orm.deleteOne(id, function(data) {
        if (data.affectedRows === 1) {
            res.json({
                msg: "Burger succesfully deleted."
            });
        }
    });
});

// Export router
module.export = router;