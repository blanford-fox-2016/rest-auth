var models = require('../models')
var Users = models.User
var jwt = require('jsonwebtoken');
var token = ""

module.exports = {
    getToken: function (req, res) {
        // console.log(req.body)
        Users.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        }).catch(function (err) {
            res.send(err.message)
        }).then(function (user) {
            if (user.username) {
                var token = jwt.sign({
                    data: user.username
                }, 'secret', { expiresIn: 60 * 60});
                res.json(token)
            }

        })

        // var token = jwt.sign({
        //     data: "test"
        // }, 'secret', { expiresIn: 60 * 60 });
        // res.json(token)
    }

}