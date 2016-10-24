var express = require('express');
var router = express.Router();
var models = require('../models')
var Users = models.Users
var controller = require('../controller/index_controller')
var jwt = require('jsonwebtoken')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rest-Auth With Node JS & Express Generator' });
});
/*
Testing token :
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNDc3MzA4NjE1LCJleHAiOjE0NzczMTIyMTV9.uJd5aOnEfTxQfOshyux7GiAmFmz3Y1BfvMz0KWxaLpI
*/
router.get('/api/users?:token', (req, res) => {
  controller.checkToken(req, res)

})

router.post('/api/auth', (req, res, next) => {
  controller.checkLogin(req, res)
})

router.get('/api/users', (req, res, next) => {
  controller.readAllData(req, res)
  res.redirect('/')
})

router.get('/api/users/:id', (req, res, next) => {
  controller.readOneData(req, res, req.params.id)
})

router.post('/api/users', (req, res, next) => {
  controller.addData(req, res)
  res.redirect('/')
})

router.put('/api/users/:id', (req, res, next) => {
  controller.updateData(req, res, req.params.id)
})

router.delete('/api/users/:id', (req, res, nex) => {
  controller.deleteData(req, res, req.params.id)
})

router.get('/register', (req, res, next) => {
  res.render('register', {title: 'Rest-Auth With Node JS & Express Generator'})
})

// router.post('/signin', (req, res, next) => {
//   console.log(req.body.username);
//   Users.findOne({
//     where: {
//       username: req.body.username
//     }
//   }).then((data) => {
//     console.log(data.dataValues);
//     req.session.user_id = data.id
//     req.session.user_name = data.username
//     console.log(req.session.user_id);
//     if(typeof req.session.user_id === "undefined"){
//       res.redirect('/signin')
//     }else{
//       console.log(`asdfdfs`);
//       res.render('signin', {title: 'Rest-Auth With Node JS & Express Generator', session_user_id : req.session.user_id, session_username: req.session.user_name})
//     }
//   }).catch((err) => {
//     if(err) console.log(err);
//     res.render('index', {
//       title: 'Rest-Auth With Node JS & Express Generator',
//       err: 'Input wrong'})
//   })
// })

module.exports = router;
