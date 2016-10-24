var express = require('express');
var router = express.Router();
let models = require('../models');
let user = models.User;
let Sequelize = require('sequelize');
let userController = require('../controllers/userController.js')
let ejwt = require('express-jwt');
let jwt = require('jsonwebtoken');

router.get('/', ejwt({secret: 'secret'}), userController.read);

router.get('/:id', ejwt({secret: 'secret'}), userController.readOne);

router.post('/', ejwt({secret: 'secret'}), userController.create);

router.put('/:id', ejwt({secret: 'secret'}), userController.update);

router.delete('/:id', ejwt({secret: 'secret'}), userController.destroy);

module.exports = router;
