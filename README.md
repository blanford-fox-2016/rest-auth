# REST-AUTH
rest-auth exercise with Node.js, Express, PostgreSQL & Sequelize

## Preparation
Initialize express on root directory
> `express .`

call packages from `package.json`

> `npm install`

call additional packages (PostgreSQL & Sequelize)

> `npm install --save pg pg-hstore sequelize sequelize-cli`

you can also use `nodemon` to easily your route editing

> `npm install --save nodemon`

for convenience showing `json` data, you might like to install `prettyjson`

> `npm install -g prettyjson`

for linux :
> `sudo npm install -g prettyjson`

## Database Initialization

Initialize sequelize on folder
> `sequelize init`

this operation will add many files including `config.json`
edit `config.json` database and dialect to

```
{
    "development": {
        "username": "postgres",
        "password": "password",
        "database": "restbasic",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": "postgres",
        "password": "password",
        "database": "restbasic",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": "postgres",
        "password": "password",
        "database": "restbasic",
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
}
```
create a model on sequelize then migrate it to test our database configuration
> `sequelize model:create --name User --attributes username:string,email:string,website:string`

after the model is created
> `sequelize db:migrate`

## API Routes
Route | HTTP | Description |
------|------|------------|
`localhost:3000/api/auth` | GET | Get an access token
`localhost:3000/api/users` | GET | Get all user data
`localhost:3000/api/users/:id` | GET | Get spesific user by id
`localhost:3000/api/users` | POST | Create new user
`localhost:3000/api/users/:id` | DELETE | Delete one user by id
`localhost:3000/api/users/:id` | PUT | Edit user by id

## CURL example
Request | Action |  
------|------|
`curl -X GET "http://localhost:3000/api/users" -d "token=(tokenValue)"` | Get all user data
`curl -X GET "http://localhost:3000/api/users/1" -d "token=(tokenValue)"` | Get user data id 1
`curl -X POST "http://localhost:3000/api/users" -d "token=(tokenValue)&username=newUsername&password=newPassword&email=newEmail&website=newWebsite"`|  Create new user
`curl -X DELETE "http://localhost:3000/api/users/1" -d "token=(tokenValue)"` | Delete user id 1
`curl -X PUT "http://localhost:3000/api/users/1" -d "token=(tokenValue)&username=newUsername&email=newEmail@gmail.com&website=newWebsite.com"` | Edit user id 1

## Tree view Directory
```
.
├── app.js
├── bin
│   └── www
├── config
│   └── config.json
├── controller
│   └── controller.js
├── migrations
│   └── 20161024080748-create-user.js
├── models
│   ├── index.js
│   └── user.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── README.md
├── routes
│   ├── index.js
│   └── users.js
├── seeders
└── views
    ├── error.jade
    ├── index.jade
    ├── layout.jade
    └── login.jade

12 directories, 15 files
```

## Contributors
Copyright 2016 ahyanarizky
