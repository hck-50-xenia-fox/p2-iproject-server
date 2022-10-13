# Movie API Documentation

## Endpoints :

List of available endpoints:

# 1. `GET /characters`

# 2. `GET /summons`

# 3. `POST /users/register`

# 4. `POST /users/login`

# 5. `POST /users/google-login`



&nbsp;

## 1. GET /characters

Description :

- Get all the characters data

\*\*Request


\*\*Response (200 - OK)

- body:

```json
[
  {
  "id": Integer,
  "name": String,
  "element": String,
  "imageUrl": String,
  "description": String,
  "createdAt": Date,
  "updatedAt": Date,
  
  }
  .....
]
```



## 2. GET /summons

Description :

- Get all the summons data


\*\*Response (200 - OK)

- body:

```json
[ 
  {
        "id": Integer,
        "name": String,
        "element": String,
        "imageUrl": String
        "createdAt": Date,
        "updatedAt": Date
  },
  
  .....
]
```



## 3. POST /users/registers

Description:

- Create a new user data

\*\*REQUEST

- body :

```json
  {
  "username": String,
  "email": String,
  "password": Integer,
  }

```

\*\*RESPONSE (201 - Created)

- body :

```json
{
  "id": Integer,
  "email": String
}
```

\*\*RESPONSE (400 - Bad Request)

- body

```json
{
  "message": "format email is required"
}
OR
{
  "messsage": "Your email already used"
}
OR
{
  "message": "password is required"
}
OR
{
  "message": "email is required"
}
```


## 21. GLOBAL ERROR

\*\*RESPONSE (500 - Internal Server Error)

```json
{
  "message": "Internal Server Error"
}
```
