# rest-auth
Rest Auth With Node Js & Express Generator

## Installation:
> Install Newest Node JS (v6.\*.\* LTS) : https://nodejs.org/en/

> npm install -g express

> npm install -g express-generator

> npm install --save nodemon


Database : postgres
> npm install -g pg

> npm install --save pg

ORM : sequelize
> npm install -g sequelize

> npm install --save sequelize

ORM's Installation :
> sequelize init

> Setting config.json

Pretty Json : (Add '| prettyjson' after installation)
> npm install --save-dev prettyjson

How to start server :
> npm start

************************************
# API References
## List of user routes :

| Route | HTTP | Description|
|-------|------|------------|
|`/api/users`| GET | Get all users |
|`api/users/id`| GET | Get a single user |
|`api/users`| POST | Create new user |
|`api/users/id`| PUT | Update a user with new info |
|`api/users/id`|DELETE| Delete a user|


## HTTP Request's Example

| Action |Request|
|---------|-------|
|CREATE|curl -X POST http://localhost:3000/api/users -d "username=newUsername&password=123456&email=newUser@yahoo.com&website=newUser.com" |
|READ All Users|curl -X GET http://localhost:3000/api/users  |
| Read One User | curl -X GET http://localhost:3000/api/users/1 |
|Edit One user | curl -X PUT http://localhost:3000/api/users/1 -d "username=newUsername&password=12345689&email=newEmailUser@yahoo.com&website=newUser.com"|
|Delete One User | curl -X DELETE http://localhost:3000/api/users/1 |

************************************

## Directory :

```
.
├── README.md
├── app.js
├── bin
│   └── www
├── config
│   └── config.json
├── migrations
│   └── 20161024044904-create-users.js
├── models
│   ├── index.js
│   └── users.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── index.js
│   └── users.js
├── seeders
│   └── 20161024051600-unnamed-seeder.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

```
************************************

## Contributor
Ken Duigraha Putra &copy; 2016
