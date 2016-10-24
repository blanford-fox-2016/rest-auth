var express = require('express');
var router = express.Router();
var controller = require('../controller/controller')
var ejwt = require('express-jwt')



router.get('/api/auth', controller.getToken);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//get all user/
router.get('/api/users',ejwt({secret:'alibaba'}), controller.getAll);
//get user
router.get('/api/users/:id',ejwt({secret:'alibaba'}),controller.getOne);
//delete user
router.delete('/api/users/:id',ejwt({secret:'alibaba'}),controller.deleteOne);
//create user
router.post('/api/users',ejwt({secret:'alibaba'}),controller.createOne);
//update user
router.put('/api/users/:id',ejwt({secret:'alibaba'}),controller.updateData);

module.exports = router;
