module.exports = function(sequelize, DataTypes) {
    var Runr = sequelize.define("Runr", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Runr;
  };