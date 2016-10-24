'use strict'
let express = require('express');
let router = express.Router();
let models = require('../models');
let user = models.User;
let Sequelize = require('sequelize');
let userController = require('../controllers/userController.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Register REST AUTH' });
});

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Login REST AUTH' })
});

router.get('/user', (req, res, next) => {
  res.render('user', { name: 'YOUR NAME' })
});

router.post('/api/auth', userController.login);

module.exports = router;
