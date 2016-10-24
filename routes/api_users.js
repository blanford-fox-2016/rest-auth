var express = require('express');
var router = express.Router();
let models = require('../models');
let user = models.User;
let Sequelize = require('sequelize');
let userController = require('../controllers/userController.js')

router.get('/', userController.read);

router.get('/:id', userController.readOne);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.destroy);

module.exports = router;
