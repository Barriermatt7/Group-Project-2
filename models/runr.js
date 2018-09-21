var orm = require("../config/orm.js");

var Runr = {
    selectAll: function (cb) {
        orm.selectAll("Runrs", function (res) {
            cb(res);
        });
    },
   
    insertOne: function (cols, vals, cb) {
        orm.insertOne("Runrs", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("Runrs", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


module.exports = Runr;
