var express = require('express');
var router = express.Router();
var models = require('../models');
var user = models.User;
var userController = require('../controller/userController.js')
// var jwt = require('express-jwt');
var jwt = require('jsonwebtoken');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res){
  var token = req.query.token;
  jwt.verify(token, 'supersecret', function(err, decoded){
    if(!err){
      var secrets = {"accountNumber" : "938291239","pin" : "11289","account" : "Finance"};
      res.json(secrets);
    } else {
      res.send(err);
    }
  })
});

module.exports = router;
