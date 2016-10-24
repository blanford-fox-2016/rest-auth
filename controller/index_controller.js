var models = require('../models')
var Users = models.Users
var jwt = require('jsonwebtoken')

module.exports = {
  readAllData: function (req, res){
    // console.log(`test`);
    Users.findAll({
      order: 'id DESC'
    }).then((users) => {
      // var token = req.body.token
      // if(token){
      //   jwt.verify(token, 'secret', (err, decoded) => {
      //     if(err){
      //       res.json({
      //         success: false,
      //         message: "Failed to Authenticate token"
      //       })
      //     }else{
      //       res.json({
      //         success: true,
      //         message: "Authenticate token success",
      //         data: users
      //       })
      //     }
      //   })
      // }else {
      //   res.json({
      //     success: false,
      //     message: "No token provided"
      //   })
      // }
      res.json(users)
    }).catch((err) => {
      if(err){
        console.log(err);
      }
    })
  },
  readOneData: function(req, res, id){
    Users.findOne({
      where: {
        id : req.params.id
      }
    }).then((user) => {
      res.json(user)
    }).catch((err) => {
      if(err){
        console.log(err);
      }
    })
  },
  addData: function(req, res){
    console.log(req.body.email);
    Users.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }).then((user) => {
      console.log(`Insert new user success`);
      res.json(user)
    }).catch((err) => {
      if(err){
        console.log(err);
      }
    })
  },
  updateData: function(req, res) {
    Users.update({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }, {
      where: {
        id : req.params.id
      }
    }).then((user) => {
      console.log(`Updated success`);
      res.json(user)
    }).catch((err) => {
      if(err){
        console.log(`ini errororororoor`);
        console.log(err);
      }
    })
  },
  deleteData: function(req, res) {
    Users.destroy({
      where: {
        id: req.params.id
      }
    }).then((user) => {
      console.log(`User deleted`);
      res.json(user)
    }).catch((err) => {
      console.log(err);
    })
  },
  checkLogin: function(req, res){
    // console.log("username " + req.body.username);
    Users.findOne({
      where: {
        username: req.body.username
      }
    }).then((user) => {
      // console.log("password : " + req.body.password);
      if(user.password === req.body.password){
        var token = jwt.sign({
          username: user.username
        }, 'secret', {expiresIn : 60 * 60})//1 hour

        res.json({
          success: true,
          message: "Authentication success.",
          token: token
        })

      }else{
        res.json({
          success: false,
          message: 'Authentication Failed, Password not valid'
        })
      }
    }).catch((err) => {
      console.log(err);
      res.json({
        success: false,
        message: 'Authentication Failed, Username not valid'
      })
    })
  }
}
