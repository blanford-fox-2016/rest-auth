let models = require('../models');
let user = models.User;
let ejwt = require('express-jwt');
let jwt = require('jsonwebtoken');

module.exports = {
  read: (req, res, next) => {
    user.findAll().then((data, err) => {
      res.json(data);
    });
  },

  readOne: (req, res, next) => {
    user.findOne({
      where: {
        id: req.params.id
      }
    }).then((data, err) => {
      res.json(data);
    });
  },

  create: (req, res, next) => {
    user.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then((data) => {
        res.send(`Data inserted successfully! \n ${data}`);
    }).catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  },

  update: (req, res, next) => {
    user.update({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
      updatedAt: new Date()
    },{
    where: {
      id: req.params.id
      }
    }).then((data) => {
        res.send(`Data updated successfully!\n ${data}`);
    }).catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  },

  destroy: (req, res, next) => {
    user.destroy({
    where: {
      id: req.params.id
      }
    }).then((data) => {
        res.send('Data deleted successfully!');
    }).catch((err) => {
      if (err) {
        console.log(err);
      }
    });
  },

  login: (req, res, next) => {
    if (req.body.username && req.body.password) {
      user.findOne({
        where:{username: req.body.username}
      }).then(function(user) {
        if (user != null) {
          if (user.password == req.body.password) {
            var token = jwt.sign({
              username: user.username
            }, 'secret', {expiresIn : 60 * 60});
            res.send(`login success! token = ${token}`)
          } else {
            res.send('login failed!')
          }
        } else {
          res.render('login', {wrong: 'Username not registered yet, please sign up!'})
        }
      })
    } else {
      res.send('email field must be filled')
    }
  }
}
