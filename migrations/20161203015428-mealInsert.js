'use strict';

var Hotdog = require('../models').Hotdog;
var sequelize = require('../models').sequelize;

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Hotdog.bulkCreate([
      {meal_name: "LizardMan Sandwich"},
      {meal_name: "Classic Split"},
      {meal_name: "Crispy Critters"},
      {meal_name: "Ben Blankenwich"},
      {meal_name: "Dulce Sweet Potato Fries"}
    ])
  },

  down: function (queryInterface, Sequelize) {
    return Hotdog.destroy({where:{ meal_name:
      [
        "LizardMan Sandwich",
        "Classic Split",
        "Crispy Critters",
        "Ben Blankenwich",
        "Dulce Sweet Potato Fries"
      ]
    }})
    .then(function(){
      return sequelize.query('ALTER TABLE Hotdogs AUTO_INCREMENT=1')
    })
  }
};
