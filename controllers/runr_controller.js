var express = require("express");

var router = express.Router();


var runr = require("../models/runr.js");


router.get("/", function (req, res) {
    runr.selectAll(function (data) {
        var hbsObject = {
            runrs: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// add posts for all data inputs
router.post("/api/runrs", function (req, res) {
    runr.insertOne([
        "runr_name", "devoured"
    ], [
            req.body.runr_name, req.body.devoured
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

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