var orm = require("../config/orm.js");

var runr = {
    selectAll: function (cb) {
        orm.selectAll("runr", function (res) {
            cb(res);
        });
    },
   
    insertOne: function (cols, vals, cb) {
        orm.insertOne("runr", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("runr", objColVals, condition, function (res) {
            cb(res);
        });
    }
};


module.exports = runr;
