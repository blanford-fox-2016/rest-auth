var models = require('../models')
var Users = models.User
var jwt = require('jsonwebtoken');
// var decoded = jwt.verify(token, 'foobar');
// console.log(decoded.foo) // bar



module.exports = {
    getUser: function (req, res) {
        // res.send('respond with a resource controller');
        Users.findAll().then(function (user) {
            // console.log(req.query.token)
            // res.render('users', {title: "Users", user:req.params.token})
            // res.json(req.query.token)
            if(req.query.token) {
                jwt.verify(req.query.token, 'secret', function(err) {
                    if (err) {
                        res.json({
                            error: "token tidak valid"
                        })
                    } else {
                        res.json({
                            user:user,
                            token: req.query.token
                        })
                    }
                });
            }
            else {
                res.json({
                    err: "token harus di isi"
                })
            }
        })
    },

    getSingleUser: function (req, res) {
        // res.send('respond with a resource controller');
        Users.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (user) {
            // res.render('users', {title: "Users", user:user})
            if(req.query.token) {
                jwt.verify(req.query.token, 'secret', function(err) {
                    if (err) {
                        res.json({
                            error: "token tidak valid"
                        })
                    } else {
                        res.json({
                            user:user,
                            token: req.query.token
                        })
                    }
                });
            }
            else {
                res.json({
                    err: "token harus di isi"
                })
            }
        })
    },

    addUser: function (req, res) {
        if(req.query.token) {
            jwt.verify(req.query.token, 'secret', function(err) {
                if (err) {
                    res.json({
                        error: "token tidak valid"
                    })
                } else {
                    Users.create({
                        username: req.body.username,
                        fullname: req.body.fullname
                    }).catch(function (err) {
                        res.send(err.message)
                    }).then(function (user) {
                        res.json({
                            user:user,
                            token: req.query.token
                        })
                    })
                }
            });
        }
        else {
            res.json({
                err: "token harus di isi"
            })
        }
    },

    updateUser: function (req, res) {
        if(req.query.token) {
            jwt.verify(req.query.token, 'secret', function(err) {
                if (err) {
                    res.json({
                        error: "token tidak valid"
                    })
                } else {
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
                }
            });
        }
        else {
            res.json({
                err: "token harus di isi"
            })
        }
    },

    deleteUser: function (req, res) {
        if(req.query.token) {
            jwt.verify(req.query.token, 'secret', function(err) {
                if (err) {
                    res.json({
                        error: "token tidak valid"
                    })
                } else {
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
            });
        }
        else {
            res.json({
                err: "token harus di isi"
            })
        }
    }
}