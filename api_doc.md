# API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /pokemons`
- `GET /products/:name`
- `POST /questions`



&nbsp;

## 1. POST /register

### Description
- register for an account

### Request
- Body
```json
  {
    "username": STRING,
    "email": STRING,
    "password": STRING,
  }
```
### Response
_201 - CREATED_

- Body
```json
{
    "message": "your account is now registered, Trainer.",
}
```

_400 - Bad Request_

- Body
```json
{
    "msg": 
    [
        "Email is already used", 
        OR
        "Email is required", 
        OR
        "Password is required", 
        OR
        "Username is required", 
    ]
}
```

## 2. POST /login

### Description
- login to app with registered account

### Request

- Headers
```json
{
  "access_token" : STRING
}
```

- Body
```json
{
  "email": STRING,
  "password": STRING,
}
```

### Response

_200 - OK_

- Body
```json
{
    "access_token": STRING,
    "username": STRING,
}
```

_401 - Unauthorized_

- Body
```json
{
  "message": "Invalid email/password"
}
```

_400 - Bad Request_

- Body
```json
{
  "message": "Email/password is required"
}
```

## 3. POST /pub/google-sign-in

### Description
- login to app as user with google account

### Request

- Headers
```json
{
  "google_token": STRING
}
```

### Response

_200 - OK_

- Body
```json
{
    "statusCode": 200,
    "access_token": STRING,
    "username": STRING,
    "id": INTEGER,
    "role": STRING,
    "email" : STRING
}
```

## 4. GET /pub/products

### Description
- Get all products data

### Request
- Headers
```json
{
  "access_token" : STRING
}
```

### Response
_200 - OK_

- Body
```json
{
  "data": [
    {
      "id": INTEGER,
      "name": STRING,
      "description": STRING,
      "price": INTEGER,
      "stock": INTEGER,
      "imgUrl": STRING,
      "categoryId": INTEGER,
      "authorId": INTEGER,
      "createdAt": DATE,
      "updatedAt": DATE,
      "User": OBJECT,
      "Category": OBJECT
    }
    ...
  ]
}  
```

## 5. GET /pub/products/:id

### Description
- Get product detail by an id

### Request

- Params
```json
{
  "id": INTEGER
}
```

### Response
_200 - OK_

- Body
```json
{
  "data": 
      {
        "id": INTEGER,
        "name": STRING,
        "description": STRING,
        "price": INTEGER,
        "stock": INTEGER,
        "imgUrl": STRING,
        "categoryId": INTEGER,
        "authorId": INTEGER,
        "createdAt": DATE,
        "updatedAt": DATE,
        "User": OBJECT,
        "Category": OBJECT
      }
}
```

 _404 - Not Found_

- Body
```json
  {
      "msg": "Product not found"
  }
```

## 6. GET /pub/wishlists

### Description
- Get all customer who logged in wishlists

### Request
- Headers
```json
{
  "access_token": STRING
}
```

### Response
_200 - OK_

- Body
```json
[
    {
        "id": INTEGER,
        "ProductId": INTEGER,
        "UserId": INTEGER,
        "createdAt": DATE,
        "updatedAt": DATE,
        "Product": {
            "id": INTEGER,
            "name": STRING,
            "description": STRING,
            "price": INTEGER,
            "stock": INTEGER,
            "imgUrl": STRING,
            "categoryId": INTEGER,
            "status": STRING,
            "authorId": INTEGER,
            "createdAt": DATE,
            "updatedAt": DATE
    },
    ...
]
```

_401 - Unauthorized_

- Body
```json
{
    "msg": "User not login yet!"
}

OR

{
    "msg": "Invalid Token"
}
```
_403 - Forbbiden_

- Body
```json
{
    "msg": "User cannot access this action"
}
```

## 7. POST /pub/wishlists/:id


### Description
- Add new wishlist on customer wishlists 

### Request
- Headers
```json
{
  "access_token": STRING
}
```

- Body
```json
{
  "name": STRING
}
```
### Response

_201 - CREATED_
```json
{
    "message": "Success adding product's name to your wishlists!"
}
```

_401 - Unauthorized_

- Body
```json
{
    "msg": "User not login yet!"
}

OR

{
    "msg": "Invalid Token"
}
```

 _404 - Not Found_

- Body
```json
  {
      "msg": "Product not found"
  }
```

&nbsp;

## Global Error

### Response
_500 - Internal Server Error_

- Body
```json
{
  "msg": "Internal Server Error"
}
```
