var express = require('express');
var router = express.Router();
var controller = require('../controllers/login')

/* GET home page. */
router.get('/', controller.loginPage)

router.post('/login', controller.loginPost)

module.exports = router;
