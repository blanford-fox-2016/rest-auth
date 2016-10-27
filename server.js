//grab all dependencies
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	router = express.Router(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	jwt = require('jsonwebtoken'),
	config = require('./config')

//configure app
mongoose.connect(config.database) //setup database
app.set('secretku', config.secret) //secret variable

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev')) //use morgan to log requests to console

//set routes
app.use(require('./app/routes'))

//start server
app.listen(port)
console.log('Ya udah jalan di port: ' + port)

