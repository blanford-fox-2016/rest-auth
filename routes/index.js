var express = require('express');
var router = express.Router();
var jwte = require('express-jwt');
var model = require('../models');
var user = model.User;
var users_controller = require('../controller/users_controller');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// get token
// /api/token
router.get('/api/token', jwte({secret:'ada'}), users_controller.getLogin );

// Get all the users
// /api/users
router.get('/api/users', jwte({secret:'ada'}), users_controller.getAllUsers );

// Get a user
// /api/users/:id
router.get('/api/users/:id', jwte({secret:'ada'}), users_controller.getUserById);

// create a user
// /api/users
router.post('/api/users', jwte({secret:'ada'}), users_controller.addNewUser);

// Update a user with new info
// /api/users/:id
router.put('/api/users/:id', jwte({secret:'ada'}), users_controller.updateUserById);

// Delete a user
// /api/users/:id
router.delete('/api/users/:id', jwte({secret:'ada'}), users_controller.deleteUserById);






module.exports = router;
