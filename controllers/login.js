var models = require('../models')
var Users = models.User
var jwt = require('jsonwebtoken');
var token = ""

module.exports = {
    getToken: function (req, res) {
        var token = jwt.sign({
            data: "test"
        }, 'secret', { expiresIn: 60 });
        res.json(token)
    }

}