let models = require('../models');
let user = models.User;

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
  }
}
