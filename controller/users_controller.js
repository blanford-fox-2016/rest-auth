var express = require('express');
var router = express.Router();
var model = require('../models');
var user = model.User;
var jwt = require('jsonwebtoken');

module.exports = {
  getLogin : function(req, res){
    var input_email = req.body.email;
    var input_password = req.body.password;

    user.findOne({
      where : {
        email : input_email,
        password : input_password
      }
    }).then(function(data){
      if (data) {
        var token = jwt.sign({ foo: 'bar' }, 'ada');
        res.send(token);
      }else{
        console.log("email atau password salah");
      }
    })

  },
  getAllUsers : function(req, res) {

    user.findAll().then(function(data){
      res.send(data)
    })

  },
  getUserById : function(req, res) {
    var input_user_id = req.param('id')
    user.findOne({
      where:{
        id :input_user_id
      }
    }).then(function(data){
      // res.render('index', { data });
      res.send(data)
    })

  },
  addNewUser : function(req, res) {
    console.log(req.body);
    var data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phoneP: req.body.phone
    }
    user.create(data)
  },
  updateUserById : function(req, res) {

    var input_user_id = req.param('id');
    var input_first_name = req.body.first_name;
    var input_last_name = req.body.last_name;
    var input_email = req.body.email;
    var input_phone = req.body.phone;

    user.update({
      first_name : input_first_name,
      last_name : input_last_name,
      email : input_email,
      phone : input_phone
    },{
      where : {
        id: input_user_id
      }
    }).catch(function(err){
      console.log(err);
    }).then(function(){
      res.send("data ke update")
    })

  },
  deleteUserById : function(req, res) {
    var input_user_id = req.param('id');

    user.destroy({
      where : {
        id : input_user_id
      }
    }).then(function(){
      res.send("data berhasil di hapus")
    })
  }

}
