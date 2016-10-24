var models = require('../models')
var Users = models.User

module.exports = {
    getUser: function (req, res) {
        // res.send('respond with a resource controller');
        Users.findAll().then(function (user) {
            res.render('users', {title: "Users", user:user})
        })
    },

    getSingleUser: function (req, res) {
        // res.send('respond with a resource controller');
        Users.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (user) {
            res.render('users', {title: "Users", user:user})
        })
    },

    addUser: function (req, res) {
        Users.create({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone
        }).catch(function (err) {
            res.send(err.message)
        }).then(function (user) {
            res.json(user)
        })
    },

    updateUser: function (req, res) {
        Users.update({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone
        }, {
            where: {
                id: req.params.id
            }
        }).catch(function (err) {
            res.send(err.message)
        }).then(function (user) {
            res.json(user)
        })
    },

    deleteUser: function (req, res) {
        Users.destroy({
            where: {
                id: req.params.id
            }
        }).catch(function (err) {
            res.send(err.message)
        }).then(function () {
            res.redirect('api/users')
        })
    }
}