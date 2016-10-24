# rest-auth

To start the program, you need to install the following command.
```npm i -S body-parser express express-jwt jsonwebtoken nodemon pg sequelize```

## Features

| ROUTE             | HTTP VERB | DESCRIPTION               |
|-------------------|-----------|---------------------------|
| /api/users        | GET       | get all data              |
| /api/users        | POST      | create a data             |
| /api/users/:id    | GET       | get a data                |
| /api/users/:id    | PUT       | update a data             |
| /api/users/:id    | DELETE    | delete a data             |
| /api/auth         | POST      | check name and password   |
