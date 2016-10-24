var express = require('express');
var router = express.Router();
var controller = require('../controllers/users')

/* GET users listing. */

router.get('/', controller.getUser)

router.get('/:id/', controller.getSingleUser)

router.post('/', controller.addUser)

router.put('/:id/', controller.updateUser)

router.delete('/:id/', controller.deleteUser)

module.exports = router;
