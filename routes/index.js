var express = require('express');
var router = express.Router();
var models = require('../models')
var Users = models.Users
var controller = require('../controller/index_controller')
var jwt = require('express-jwt')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rest-Auth With Node JS & Express Generator' });
});
/*
Testing token :
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNDc3MzE1Nzk3LCJleHAiOjE0NzczMTkzOTd9.7IQ1KvRG5-CCZwxJf_0b-SrtGn0qk9DEo9lXI_s99ek
*/
// missed
// router.get('/api/users?:token', (req, res) => {
//   controller.checkToken(req, res)
// })
// router.get('/api/users', auth, (req, res) => {
//   controller.readAllData
// })

// generate token
router.post('/api/auth', controller.checkLogin)

//read all data
router.get('/api/users', jwt({secret: 'secret'}), controller.readAllData)

//read one data
router.get('/api/users/:id', jwt({secret: 'secret'}), controller.readOneData)

//add new user
router.post('/api/users', jwt({secret: 'secret'}), controller.addData)

//update user
router.put('/api/users/:id', jwt({secret: 'secret'}), controller.updateData)

router.delete('/api/users/:id', jwt({secret: 'secret'}), controller.deleteData)

router.get('/register', (req, res, next) => {
  res.render('register', {title: 'Rest-Auth With Node JS & Express Generator'})
})


module.exports = router;
