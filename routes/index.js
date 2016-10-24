var express = require('express');
var router = express.Router();
var models = require('../models');
var user = models.User;
var userController = require('../controller/userController.js')
var ejwt = require('express-jwt');
var jwt = require('jsonwebtoken');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
