'use strict'

//================================================
// Setting up the constant
//================================================

const express = require('express');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const xoxo = require('./controller/controller.js');

//================================================
// Configure the apps
//================================================
let app = express();
let router = express.Router()
let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//================================================
// Setting up the routes
//================================================
router.get('/auth', xoxo.login);
router.get('/users', expressJwt({secret: 'whatever'}), xoxo.showAll);
router.get('/users/:id', expressJwt({secret: 'whatever'}), xoxo.findById);
router.post('/users', expressJwt({secret: 'whatever'}), xoxo.addUser);
router.put('/users/:id', expressJwt({secret: 'whatever'}), xoxo.updateUser);
router.delete('/users/:id', expressJwt({secret: 'whatever'}), xoxo.destroyById)



//================================================
// Listening the app through the port
//================================================
app.use('/api', router);

app.listen(port, () => {
  console.log('listening on the port ', port);
})
