const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controller')

module.exports = router

router.post('/api/authenticate', mainController.findUser)

router.use(mainController.checkToken)

router.get('/api', mainController.showMain)

router.get('/api/seed', mainController.seed)

router.route('/api/datas')
	.post(mainController.postData)
	.get(mainController.getDatas)

router.route('/api/datas/:id')
	.get(mainController.getData)
	.put(mainController.editData)
	.delete(mainController.deleteData)
