## Endpoints In Petshop App

List of available endpoints

- POST /register
- POST /login
- POST /login/googleLogin
- GET /product
- POST /product
- DELETE /product/:id

### POST /register

#### Description

- Register Account

### Request

- Body
  ```json
    {
      "username": String,
      "email": String,
      "password": String,
      "phoneNumber": String,
      "address": String
    }
  ```

### Response
_201 - Created_
- Body
  ```json
  {
    "id": Integer,
    "email": String
  }
  ```
_400 - Bad Request_
- Body
    ```json
      {
        "msg":[
          String,
          .......
        ]
      }
    ```
### POST /login

### Description

- Login using an existing account

#### Request

- Body
    ```json
      {
        "email": String,
        "password": String
      }
    ```

### Response

_200 - OK_

- Body
  ```json
  {
    "access_token": String,
    "dataUser": {
        "id": Integer,
        "username": String,
        "role": String
    }
  }
  ```

_404 - Not Found_

- Body
  ```json
  {
    "msg": "Invalid Email or Password"
  }
  ```
### POST /login/googleLogin

#### Description

- Register or Login with google account

### Request

- Body
  ```json
     {
       "email": String,
     }
  ```

#### Response

_200 - OK_

- Body
  ```json
    {
      "access_token": String,
      "dataUser": {
          "id": Integer,
          "email": String,
          "role": String,
          "username": String
      }
  ```

### GET /product

#### Description

- Get all data from products

### Request



### Response

_200 - OK_

- Body
  ```json
  [
    {
      "name": String,
      "description": String,
      "price": Integer,
      "stock": Integer,
      "imgUrl": String,
      "categoryId": Integer,
      "authorId": Integer,
      "createdAt": Date,
      "updatedAt": Date
    }
  ]
  ``
### POST /product

#### Description

- Creating a new data product

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```
- Body
  ```json
  {
    "name": String,
    "description": String,
    "price": Integer,
    "stock": Integer,
    "imgUrl": String,
    "categoryId": Integer,
    "authorId": Integer,
    "createdAt": Date,
    "updatedAt": Date
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  [
    "statusCode": 201,
    "data": {
      "id": Integer,
      "name": String,
      "address": String,
      "zipCode": String,
      "createdAt": Date,
      "updatedAt": Date
    }
  ]
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "statusCode": 400,
    "error": {
      "message": String
    }
  }
  ```

### DELETE /product/:id

#### Description

- Deleting or Remove data from product by id

#### Request

- Headers
  ```json
  {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  ```

#### Response

\_200 - OK

- Body
  ```json
    {
      "message": String
    }
  ```

_404 - Not Found_

- Body
  ```json
    {
      "message": String
    }
  ```