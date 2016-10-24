var express = require('express');
var router = express.Router();
var controller = require('../controllers/users')
var express_jwt = require('express-jwt')

/* GET users listing. */

router.get('/', express_jwt({secret: 'secret'}), controller.getUser)

router.get('/:id/', express_jwt({secret: 'secret'}), controller.getSingleUser)

router.post('/', express_jwt({secret: 'secret'}), controller.addUser)

router.put('/:id/', express_jwt({secret: 'secret'}), controller.updateUser)

router.delete('/:id/', express_jwt({secret: 'secret'}), controller.deleteUser)

module.exports = router;
