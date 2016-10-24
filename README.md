# rest-auth by tamatamvan
A simple example for REST API AUTH implementation using **Node.JS 6, Express, Sequelize, PostgreSQL, JSON Web Token. **


## Technology
Here are some technologies that used and required to run this program. Make sure you've installed all of them on your machine.
* [Node.JS 6](https://nodejs.org/)
* [Express (NodeJS Framework)](http://expressjs.com/)
* [Sequelize (NodeJS ORM)](http://docs.sequelizejs.com/en/v3/)
* [PostgreSQL (SQL Database)](https://www.postgresql.org/)
* [JSON Web Token](https://jwt.io)
* [jsonwebtoken (npm package)](https://www.npmjs.com/package/jsonwebtoken)
* [express-jwt (npm package)](https://github.com/auth0/express-jwt)

## Files and directory structure

If you need to edit the routes you can access  `routes/api_users.js` file, and if you need to edit the logic and data operations you can access `controller/userController.js`
```
.
├── README.md
├── app.js
├── bin
│   └── www
├── config
│   └── config.json
├── controllers
│   └── userController.js
├── migrations
│   └── 20161024091307-create-user.js
├── models
│   ├── index.js
│   └── user.js
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── api_users.js
│   ├── index.js
│   └── users.js
├── seeders
└── views
    ├── error.jade
    ├── index.jade
    ├── layout.jade
    ├── login.jade
    └── user.jade
```


## package.json file and dependencies list

```
{
  "name": "rest-auth",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "express-jwt": "^5.1.0",
    "jade": "~1.11.0",
    "jsonwebtoken": "^7.1.9",
    "morgan": "~1.7.0",
    "pg": "^6.1.0",
    "sequelize": "^3.24.5",
    "serve-favicon": "~2.3.0"
  }
}
```

## Running rest-basic on your machine
Here are some steps you've to follow for running this rest-basic API on your machine :
* `cd your_program_directory`
* `npm install` (Install all dependencies of this program)
* make sure you have a database on your postgreSQL server named `rest_api`, or you can use a different database name and SQL database type, but still remember to edit the `config/config.json` file according to your prefered database configuration.
* `sequelize db:migrate` (migrate all tables neede in your database table)
* `npm start` (Run the node.js server on port 3000)

## API References

List off all routes :

|  Route | HTTP | Description |
|--------|------|-------------|
|http://localhost:3000/api/users/ | GET | Get all users list|
|http://localhost:3000/api/users/:id | GET | Get a single user's data|
|http://localhost:3000/api/users/ | POST | Create a new user|
|http://localhost:3000/api/users/:id | DELETE | Delete a user's data by a spesific id|
|http://localhost:3000/api/users/:id | PUT | Update a user's data by a spesific id|

## Seeder and Generate token

You can run `sequelize db:seed:all` to fill the database with a new data `{ name : 'Admin Ganteng', username: 'admin', password: 'admin', email: 'admin@admin.com' }`. Then you can use the data for test the login and generate a token using command `curl -X POST 'http://localhost:3000/api/auth -d 'username=admin&password=admin'`. After you've been successfully login and get the token, you can test the restfull crud, with the guide on the next section below.

## HTTP Request Examples

You can test the routes and see if the routes are giving a right reponses using curl or postman. However, we recommend you to use cURL as it's already installed on MacOSX and Linux system (If you're using Windows, it's been built-in git bash) and easy to use.

If you need to know more about cURL, you can access the manual by executing the `man curl` command on your command line console, or visit this [link](https://curl.haxx.se/docs/)

Here are users route curl's command examples to test this rest_basic api :

| Action | cURL's Command |
|--------|----------------|
| Get all users list | `curl -X GET 'http://localhost:3000/api/users/'--header 'authorization Bearer your_token'` |
| Get a single user's data by spesific id | `curl -X GET 'http://localhost:3000/api/users/:id'--header 'authorization Bearer your_token'` |
| Create a new user | `curl -X POST 'http://localhost:3000/api/users/:id' -d 'name=your_name&username=your_username&password=your_password&email=your_email'--header 'authorization Bearer your_token'` |
| Delete a user's data by a spesific id | `curl -X DELETE 'http://localhost:3000/api/users/:id'--header 'authorization Bearer your_token'` |
| Update a user's data by spesific id | `curl -X POST 'http://localhost:3000/api/users/:id' -d 'name=your_new_name&username=your_new_username&password=your_new_password&email=your_new_email'--header 'authorization Bearer your_token'` |


## Contact
#### Developer/Projects
* Homepage: [TamaTamvan's Note](https://tamatamvan.web.id)
* e-mail: tama@tamatamvan.web.id
* Twitter: [@tamaadhi1](https://twitter.com/tamaadhi1 "tamaadhi1 on twitter")
* Facebook: [Septian Adhi Tama](https://facebook.com/light.akira21 "Septian Adhi Tama on Facebook")

## Contributor

[![TamaTamvan](https://tamatamvan.web.id/wp-content/uploads/2016/04/bner-e1463908127607.png)](https://tamatamvan.web.id)

Septian Adhi Tama &copy; 2016
