var express = require('express');
var router = express.Router();
var models = require('../models');
var user = models.User;
var userController = require('../controller/userController.js')
var ejwt = require('express-jwt');


router.get('/auth', userController.auth)

router.get('/', ejwt({secret:'RahasiaBro'}), userController.read);

router.get('/:id', ejwt({secret:'RahasiaBro'}), userController.readOne);

router.post('/', ejwt({secret:'RahasiaBro'}), userController.create);

router.delete('/:id', ejwt({secret:'RahasiaBro'}), userController.destroy);

router.put('/:id', ejwt({secret:'RahasiaBro'}), userController.update);

module.exports = router;
