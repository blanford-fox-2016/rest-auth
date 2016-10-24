var express = require('express');
var router = express.Router();
var controller = require('../controllers/login')

/* GET home page. */
router.post('/', controller.getToken)


module.exports = router;
