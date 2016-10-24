var express = require('express');
var router = express.Router();
var models = require('../models')
var user = models.User
var jwt = require('jsonwebtoken');
var controller = require('../controller/controller.js')




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'REST-AUTH' });
});

// GET login page
router.get('/api/login', function(req, res, next) {
  res.render('login', {title: 'REST-AUTH LOGIN'})
})

// With API Authentication
router.post('/api/auth', controller.checkLogin)



module.exports = router;
