var express = require('express');
var router = express.Router();
var Hotdog = require('../models/')["Hotdog"];
var Customer = require('../models/')["Customer"];

router.get('/', function (req, res) {
  res.render('index')
});

router.get('/hotdogs/selectAll', function (req, res) {
  //sequelize update
  // Hotdog.findAll({include:{model: Customer}})
  Hotdog.findAll()
  .then(function(hotdogs) {
    console.log("Hotdogs Promise object from /selectAll: "+ hotdogs);
    return res.render('index', {hotdogs})
  })
});

router.post('/hotdogs/insertOne', function (req, res) {
  //sequelize update
  Hotdog.create({meal_name: req.body.meal_name})
  .then(function(newMeal) {
    console.log(newMeal);
    res.redirect('/hotdogs/selectAll');
  });
});

router.put('/hotdogs/updateOne', function (req, res) {

    Hotdog.findOne({where:{id: req.params.hotdog_id}})
    .then(function(theHotdog){
      theHotdog.update({
        devoured: true
      }).then(function () {
        return res.redirect('/hotdogs/selectAll');
      })
    })

  // Customer.create({customer: req.body.customer})
  // .then(function(theCustomer){
  //   return Hotdog.findOne({where:{id: req.body.hotdog_id}})
    // Hotdog.findOne({where:{id: req.body.hotdog_id}})
    // .then(function(theHotdog){
      // return theHotdog.setCustoemr(theCustomer)
      // .then(function(){
        // return theHotdog.updateAttributes({
      //   theHotdog.update({
      //     devoured: true
      //   }).then(function () {
      //     return res.redirect('/hotdogs/selectAll');
      //   })
      // })
    // })
  // })
});

router.delete('/hotdogs/deleteOne/:id', function (req, res) {

  Hotdog.destroy({where: {id: req.body.hotdog_id}})
  .then(function () {
    res.redirect('/hotdogs/selectAll');
  });
});


module.exports = router;
