var express = require('express');
var router = express.Router();
var models = require('../models')
var Users = models.Users
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
