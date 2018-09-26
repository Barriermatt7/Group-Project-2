module.exports = function(sequelize, DataTypes) {
    var Runr = sequelize.define("Runrs", {
        vehicle: DataTypes.STRING,
        miles: DataTypes.INTEGER,
        total: DataTypes.INTEGER,
    });
    return Runr;
  };