var express = require('express');
var router = express.Router();
var Hotdog = require('../models/')["Hotdog"];

router.get('/', function (req, res) {
  res.redirect('/hotdogs');
});

router.get('/hotdogs', function (req, res) {
  //sequelize update
  Hotdog.findAll()
  .then(function(data) {
    console.log(data);
    return res.render('index', {data});
  });

});

router.post('/hotdogs/insertOne', function (req, res) {
  //sequelize update
  Hotdog.create({
    meal_name: req.body.meal_name,
    devoured: false
  })
  .then(function(newMeal) {
    console.log(newMeal);
    res.redirect('/hotdogs');
  });

});

router.put('/hotdogs/updateOne/:id', function (req, res) {
  //sequelize update
  var condition = 'id = ' + req.params.id;

  Hotdog.updateOne({
    devoured: true
  },
  {
    where: {
      id:condition
    }
  }).then(function () {
    res.redirect('/hotdogs');
  });
});

router.delete('/hotdogs/deleteOne/:id', function (req, res) {
    //sequelize update
  var condition = 'id = ' + req.params.id;

  Hotdog.deleteOne({
    where: {
      id:condition
    }
  }).then(function () {
    res.redirect('/hotdogs');
  });
});


module.exports = router;
