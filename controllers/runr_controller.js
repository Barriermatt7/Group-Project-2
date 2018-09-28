//index is first page
//runr is second page with the form 

var express = require("express");
var router = express.Router();

var runr = require("../models/runr.js");


router.get("/", function(req, res) {
    res.render("index");
  });
  
  router.get("/runr", function(req, res) {
    res.render("runr");
  });


// add posts for all data inputs
router.post("/api/runrs", function (req, res) {
    db.Runrs.create({
        miles:req.body.miles,
        vehicle:req.body.vehicle,
        total:req.body.total
        }).then(function(results){
            res.json(results);
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

