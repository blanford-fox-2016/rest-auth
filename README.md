# rest-auth

## installation
  - npm install express
  - npm install --save sequelize
  - npm install --save nodemon
---
## Initialization
  - express . --ejs
  - sequelize init
---
# API
---
Route | HTTP | Description
--- | :--- | :--- |
'/api/users' | GET | Get all the users
'api/users/:id' | GET | Get a single users
'api/users' | POST | Create a user
'api/users/:id' | DELETE | Delete a users
'api/users/:id' | PUT | Update a user with new info
---
## HTTP Example
Action | Request
--------------------------------- | :------------
Create User | curl -X POST http://localhost:3000/api/users -d "username=NewUsername&birthday=1970/01/01&email=NewEmail@ema.il"
Read All User | curl -X GET http://localhost:3000/api/users
Read One User by Id | curl -X GET http://localhost:3000/api/users/2
Update User by Id | curl -X PUT http://localhost:3000/api/users/1 -d "username=UpdateUser&birthday=2010/01/01&email=UpdateEmail@ema.il"
Delete User by Id | curl -X DELETE http://localhost:3000/api/users/4
Get User Token with auth | curl -X GET localhost:3000/api/users/auth -d "username=admin&password=admin"
do something if you have token | curl -X GET localhost:3000/api/users --header "authorization:bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNDc3MzIxNjc0LCJleHAiOjE0NzczMjI4NzR9.JSmjtVtSu0TknE8kwFOLf8R-e_No6DiCOMh3yEEG3Zc"
---
## Directory
```
.
├── README.md
├── app.js
├── bin
│   └── www
├── config
│   └── config.json
├── controller
│   └── userController.js
├── migrations
│   └── 20161024052904-create-user.js
├── models
│   ├── index.js
│   └── user.js
├── node_modules
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── api.js
│   ├── index.js
│   └── users.js
├── seeders
│   └── 20161024061300-intial-seed.js
└── views
    ├── error.ejs
    └── index.ejs
```
