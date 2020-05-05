var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// CREATE
router.post("/api/burger", function(req, res) {
    const burger_name = req.body.burger_name;

    burger.create(burger_name, function(data) {
        if (data.affectedRows === 1) {
            res.redirect("/");
            
        }
    });
});

// READ
router.get("/", function(req, res) {
    burger.all(function(data) {
        res.render("index", { burgers: data});
    });
  });

// UPDATE
router.put("/api/burger/id:", function(req, res) {
    const id = req.params.id;

    burger.update(id, function(data) {
        if (data.affectedRows === 1) {
            res.json({
                msg: "Burger succesfully updated."
            });
        }
    });
});

// Export router
module.exports = router;