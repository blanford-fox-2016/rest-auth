# rest-basic

## install global
npm install -g sequelize-cli
npm install -g express-generator

## generate express
express -e (ejs format)
npm install

## make models
sequelize init

## install sequelize
npm install --save sequelize

## install postgre sql
npm install --save pg

## routing
| Routes          | HTTP           | Description  |
| --------------- |:-------------:| -----:|
| /api/auth       | GET    | Get Token
| /api/users      | GET    | Get all the users
| /api/users/:id  | GET    | Get single users
| /api/users      | POST   | Create a user
| /api/users      | DELETE | Delete a user
| /api/users      | PUT    | Update a user with new info

## curl command
| Method          | curl command                                                                                                                                     |
| --------------- | --------------- |
| Get Token         | curl -X POST http://localhost:3000/api/auth -d "username='USERNAME'&password='PASWORD'" |
| View User         | curl -X GET http://localhost:3000/api/users?token=TOKEN |
| View Single User  | curl -X GET http://localhost:3000/api/users/IDUSER/?token=TOKEN |
| Add               | curl -X POST http://localhost:3000/api/users/?token=TOKEN -d "username='USERNAME'&fullname='FULLNAME'"|
| Update            | curl -X PUT http://localhost:3000/api/users/IDUSER?token=TOKEN -d "username='USERNAME'&fullname='FULLNAME'"|
| Delete            | curl -X DELETE http://localhost:3000/api/users/IDUSER?token=TOKEN |