# rest-auth


Routes | HTTP | Description |
------------ | ----------- | -------|
/api/auth | GET | Get an access token
/api/users | GET | Get all the users
/api/users/:id | GET | Get a single user
/api/users | POST | Create a user
/api/users/:id | DELETE | Delete a user
/api/users/:id | PUT | Update a user with new info

==================================================

# get access token
$ curl -X GET localhost:3000/api/auth/"username=username&password=password"

id | username | password |
------------ | ----------- | -------|
1 | john | fewf32
2 | ibra | 324dwf

# use token access to CRUD using below format
$ curl -X GET localhost:3000/api/users/ --header "authorization: bearer token" | prettyjson
