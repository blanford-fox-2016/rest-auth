var express = require('express');
var router = express.Router();
var models = require('../models');
var user = models.User;
var userController = require('../controller/userController.js')
var jwt = require('express-jwt');


/* GET home page. */
// router.get('/auth', jwt({secret: 'RahasiaBro'}), function(req, res) {
//   if (!req.user.admin) {
//     return res.sendStatus(401);
//   } else {
//     res.sendStatus(200);
//   }
// });

router.get('/auth', userController.auth)

router.get('/', userController.read);

router.get('/:id', userController.readOne);

router.post('/', userController.create);

router.delete('/:id', userController.destroy);

router.put('/:id', userController.update);

module.exports = router;
