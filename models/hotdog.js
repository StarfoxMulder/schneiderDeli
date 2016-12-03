'use strict';
module.exports = function(sequelize, DataTypes) {
  var Hotdog = sequelize.define('Hotdog', {
    meal_name: DataTypes.VARCHAR(255),
    devoured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Hotdog;
};