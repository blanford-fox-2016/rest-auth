var models = require('../models')
var Users = models.User

module.exports = {
    loginPage: function (req, res) {
        res.render('index', {title: "Login"})
    },

    loginPost: function (req, res) {
        Users.findOne({
            where: {
                id: req.body.username
            }
        }).catch(function (err) {
            res.send(err.message)
        }).then(function () {

            res.redirect('/api/users')
        })
    }

}