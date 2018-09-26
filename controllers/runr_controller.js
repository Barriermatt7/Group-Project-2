var express = require("express");

var router = express.Router();


var runr = require("../models/runr.js");


router.get("/", function (req, res) {
        res.render("index");
    });

// add posts for all data inputs
router.post("/api/runrs", function (req, res) {
    runr.insertOne([
        "runr_name"
    ], [
            req.body.runr_name, 
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

// link eric page get.render "/"
//link ahmed page get.render "/" 
router.put("/api/runrs/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    runr.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;