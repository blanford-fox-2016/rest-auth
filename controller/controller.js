'use strict'
var models = require('../models')
var user = models.User
var jwt = require('jsonwebtoken');

module.exports = {
  showAll: function (req, res, next) {
    user.findAll({
      order:['id']
    }).then(function(users){
      var token = req.body.token
      if (token) {
        jwt.verify(token, 'secret', function(err, decoded) {
          if (err) {
            res.json({
              success: false,
              message: 'Token authentication denied'
            })
          } else {
            res.json({
              success: true,
              message: 'Token authentication successfull',
              data: users
            })
          }
        })
      } else {
        res.json({
          success: false,
          message: 'Token not detected'
        })
      }
    })
  },
  showOne: function (req, res, next) {
    user.findOne({
      where:{id:req.params.id}
    }).then(function(users){
      var token = req.body.token
      if (token) {
        jwt.verify(token, 'secret', function(err, decoded) {
          if (err) {
            res.json({
              success: false,
              message: 'Token authentication denied'
            })
          } else {
            res.json({
              success: true,
              message: 'Token authentication successfull',
              data: users
            })
          }
        })
      } else {
        res.json({
          success: false,
          message: 'Token not detected'
        })
      }

    })
  },
  create: function (req, res, next) {
    var token = req.body.token
    if (token) {
      jwt.verify(token, 'secret', function(err, decoded) {
        if (err) {
          res.json({
            success: false,
            message: 'Token authentication denied'
          })
        } else {
          user.create({
            username : req.body.username,
            password: req.body.password,
            email: req.body.email,
            website: req.body.website
          }).then(function(users){
            res.json({
              success: true,
              message: 'Token authentication successfull, data inserted successfully',
              data: users
            })
          })
         }
      })
    } else {
      res.json({
        success: false,
        message: 'Token not detected'
      })
    }

  },
  edit: function (req, res, next) {
    var token = req.body.token
    if (token) {
      jwt.verify(token, 'secret', function(err, decoded) {
        if (err) {
          res.json({
            success: false,
            message: 'Token authentication denied'
          })
        } else {
          user.findOne({
            where:{id:req.params.id}
          }).then(function(data){
            data.update({
              username : req.body.username,
              password: req.body.password,
              email: req.body.email,
              website: req.body.website
            }).then(function(users){
              res.json({
                success: true,
                message: 'Token authentication successfull, data updated',
                data: users
              })
            })
          })
         }
      })
    } else {
      res.json({
        success: false,
        message: 'Token not detected'
      })
    }
  },
  remove: function(req, res, next) {
    var token = req.body.token
    if (token) {
      jwt.verify(token, 'secret', function(err, decoded) {
        if (err) {
          res.json({
            success: false,
            message: 'Token authentication denied'
          })
        } else {
          user.destroy({
            where:{id:req.params.id}
          }).then(function(data){
            if (data == 1) {
              res.json({
                success: true,
                message: 'Token authentication successfull, data deleted successfully'
              })
            } else {
              res.json({
                success: false,
                message: 'ID not found'
              })
            }
          })
         }
      })
    } else {
      res.json({
        success: false,
        message: 'Token not detected'
      })
    }
  },
  checkLogin: function(req, res, next) {
    user.findOne({
      where:{username:req.body.username}
    }).then(function(data){
        if (data.dataValues.password == req.body.password) {
          var token = jwt.sign({username: data.dataValues.username},'secret',{expiresIn: 1440}) //1 day
          res.json({
            success: true,
            message: 'Authentication successfull',
            token: token
          })
        } else {
          res.json({
            success: false,
            message: 'wrong password'
          })
        }
    }).catch(function(err){
        res.json({
          success: false,
          message: 'username not registered'
        })
    })
  }
}
