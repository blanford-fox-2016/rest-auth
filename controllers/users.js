var models = require('../models')
var Users = models.User
var jwt = require('jsonwebtoken');



module.exports = {
    getUser: function (req, res) {
        // res.send('respond with a resource controller');
        Users.findAll().then(function (user) {

            res.json({
                user:user,
                token: req.query.token
            })
        })
    },

    getSingleUser: function (req, res) {
        // res.send('respond with a resource controller');
        Users.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (user) {
            res.json({
                user:user,
                token: req.query.token
            })
        })
    },

    addUser: function (req, res) {
        Users.create({
            username: req.body.username,
            fullname: req.body.fullname,
            password: req.body.password
        }).catch(function (err) {
            res.send(err.message)
        }).then(function (user) {
            res.json({
                user:user,
                token: req.query.token
            })
        })
    },

    updateUser: function (req, res) {
        Users.update({
            username: req.body.username,
            fullname: req.body.fullname,
            password: req.body.password
        }, {
            where: {
                id: req.params.id
            }
        }).catch(function (err) {
            res.send(err.message)
        }).then(function (user) {
            res.json({
                user:user,
                token: req.query.token
            })
        })
    },

    deleteUser: function (req, res) {
        Users.destroy({
            where: {
                id: req.params.id
            }
        }).catch(function (err) {
            res.send(err.message)
        }).then(function (user) {
            res.json({
                user:user,
                token: req.query.token
            })
        })
    }
}