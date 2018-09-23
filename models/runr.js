var orm = require("../config/orm.js");

var runr = {
    selectAll: function (cb) {
<<<<<<< HEAD
        orm.selectAll("Runr", function (res) {
=======
        orm.selectAll("runr", function (res) {
>>>>>>> 453b59821afc0221b6aba22140207fec8b4c62c4
            cb(res);
        });
    },
   
    insertOne: function (cols, vals, cb) {
<<<<<<< HEAD
        orm.insertOne("Runr", cols, vals, function (res) {
=======
        orm.insertOne("runr", cols, vals, function (res) {
>>>>>>> 453b59821afc0221b6aba22140207fec8b4c62c4
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
<<<<<<< HEAD
        orm.updateOne("Runr", objColVals, condition, function (res) {
=======
        orm.updateOne("runr", objColVals, condition, function (res) {
>>>>>>> 453b59821afc0221b6aba22140207fec8b4c62c4
            cb(res);
        });
    }
};


module.exports = runr;
