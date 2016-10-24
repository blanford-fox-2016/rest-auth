let models = require('../models');
let user = models.User;
let jwt = require('jsonwebtoken');

module.exports = {
  read: (req, res, next) => {
    if (token) {
      console.log(token);
      user.findAll().then((data, err) => {
        res.json(data);
      });
    } else {
      res.send('Token not found')
    }
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
        console.log('Data inserted successfully!');
        res.json(data);
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
        res.send('Data inserted successfully!');
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
            }, 'secret');
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
