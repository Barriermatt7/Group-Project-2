var orm = require("../config/orm.js");

var runr = {
    selectAll: function (cb) {
        orm.selectAll("Runr", function (res) {
            cb(res);
        });
    },
   
    insertOne: function (cols, vals, cb) {
        orm.insertOne("Runr", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("Runr", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


module.exports = runr;
