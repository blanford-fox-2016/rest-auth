'use strict'

//================================================
// Setting up the constant
//================================================

const models = require('../models');
const User = models.User;
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');


//================================================
// Method that will be used entire apps
//================================================

module.exports = {
  showAll : (req, res) => {
    User.findAll();
  },
  findById : (req, res) => {
    User.findOne({ where : {id : req.params.id}})
  },
  addUser : (req, res) => {
    User.create({
      username : req.body.username,
      password : req.body.password,
      email : req.body.email
    })
  },
  updateUser : (req, res) => {
    User.update({
      username : req.body.username,
      password : req.body.password,
      email : req.body.email
    })
  },
  destroyById : (req, res) => {
    User.destroy({where : {id : req.params.id}})
  },
  login : (req, res) => {
    User.findOne({where : { username : req.body.username}})
      .then(user => user.password === req.body.password ? jwt.sign({username : user.username}, 'whatever', {expiresIn : 60 * 60}) : console.log('failed bro, try again'));
  }
}
