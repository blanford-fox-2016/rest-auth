var express = require('express');
var router = express.Router();
var controller = require('../controller/controller')
var ejwt = require('express-jwt')

router.get('/api/auth/',controller.getToken);
router.get('/api/users',ejwt({secret:'shhhhh'}),controller.displayAll);
router.get('/api/users/:id',ejwt({secret:'shhhhh'}),controller.displayOne);
router.post('/api/users',ejwt({secret:'shhhhh'}),controller.create);
router.delete('/api/users/:id',ejwt({secret:'shhhhh'}),controller.delete);
router.put('/api/users/:id',ejwt({secret:'shhhhh'}),controller.updateUser);

module.exports = router;
