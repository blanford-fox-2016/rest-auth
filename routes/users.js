var express = require('express');
var router = express.Router();
var models = require('../models')
var user = models.User
var controller = require('../controller/controller.js')

/* GET users listing. */
router.get('/', controller.showAll)
router.get('/:id', controller.showOne)

/* CREATE new user */
router.post('/', controller.create)

/* EDIT user */
router.put('/:id', controller.edit)

/* DELETE user */
router.delete('/:id', controller.remove)


module.exports = router;
