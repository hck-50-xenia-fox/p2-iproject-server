# SewaMotor API Documentation

link BE: 
link FE: 

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /motorcycles/add`
- `GET /motorcycles`
- `GET /motorcycles/:id`
- `PATCH /motorcycles/:id`
- `GET /motorcycles/adv150`
- `GET /motorcycles/pcx150`
- `GET /motorcycles/scoopy110`
- `GET /motorcycles/nmax155`
- `GET /motorcycles/xmax300`
- `GET /motorcycles/primavera150`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "string",
  "name": "string",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
    "statusCode": 400,
    "status": "Bad Request",
    "error": [
        {
            "message": "string"
        },
        ...
    ]
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string",
  "name": "string"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "User not found/password not matched"
}
```

&nbsp;

## 3. POST /motorcycles/add

Request:

- body:

```json
{
  "brand": "string",
  "model": "string",
  "imageUrl": "string",
  "transmission": "string",
  "fuel": "string",
  "price": "integer"
}
```

_Response (201 - Created)_

```json
{
  "brand": "string",
  "model": "string",
  "imageUrl": "string",
  "transmission": "string",
  "fuel": "string",
  "price": "integer"
}
```

_Response (400 - Bad Request)_

```json
{
  "statusCode": 400,
  "status": "Please fill in all of the form"
}
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "status": "Invalid Token"
}
```

&nbsp;

## 4. GET /motorcycles

Description:

- Get all motorcycles from MongoDB

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
   "_id": "ObjectId('63467d54450852d21d564d74')",
        "brand": "Vespa",
        "model": "Primavera 150",
        "imageUrl": "http://api-motorcycle.makingdatameaningful.com/files/Vespa/2017/Primavera 150/Vespa_2017_Primavera 150.jpeg",
        "transmission": "Automatic",
        "fuel": "8.00 litres (2.11 gallons)",
        "price": 160000,
        "status": "Available",
        "__v": 0
  },
  {
       "_id": "ObjectId('63467d83450852d21d564d76')",
        "brand": "Yamaha",
        "model": "XMAX 300",
        "imageUrl": "http://api-motorcycle.makingdatameaningful.com/files/Yamaha/2022/XMAX 300/Yamaha_2022_XMAX 300.jpg",
        "transmission": "Automatic",
        "fuel": "13.00 litres (3.43 US gallons)",
        "price": 300000,
        "status": "Available",
        "__v": 0
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "status": "Invalid Token"
}
```

&nbsp;

## 5. GET /motorcycles/:id

Description:

- Get one motorcycle by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
[
  {
  "_id": "ObjectId('63467d54450852d21d564d74')",
        "brand": "Vespa",
        "model": "Primavera 150",
        "imageUrl": "http://api-motorcycle.makingdatameaningful.com/files/Vespa/2017/Primavera 150/Vespa_2017_Primavera 150.jpeg",
        "transmission": "Automatic",
        "fuel": "8.00 litres (2.11 gallons)",
        "price": 160000,
        "status": "Available",
        "__v": 0
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "status": "Invalid Token"
}
```

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "status": "Data not found"
}
```

&nbsp;

# 6. PATCH /motorcycles/:id

Description:
- Edit status one motorcycle by id from database

- body:
```json
{
    "status": "string"
}
```
_Response (200 - Ok)_
```json
{
    "message": "Motorcycle rented successfully"
}
```
_Response (401 - Unauthorized)_
```json
{
    "statusCode": 401,
    "status": "Invalid Token"
}
```
_Response (404 - Not Found)_
```json
{
    "statusCode": 404,
    "status": "Data not found",
}
```

&nbsp;

## 7. GET /motorcycles/adv150

Description:

- Get motorcycle adv150 by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
[
  {
  "_id": "string",
        "brand": "string",
        "model": "string",
        "imageUrl": "string",
        "transmission": "string",
        "fuel": "string",
        "price": "integer",
        "status": "string",
        "__v": "integer"
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "status": "Invalid Token"
}
```

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "status": "Data not found"
}
```

&nbsp;

## 8. GET /motorcycles/pcx150

Description:

- Get motorcycle pcx150 by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
[
  {
  "_id": "string",
        "brand": "string",
        "model": "string",
        "imageUrl": "string",
        "transmission": "string",
        "fuel": "string",
        "price": "integer",
        "status": "string",
        "__v": "integer"
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "status": "Invalid Token"
}
```

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "status": "Data not found"
}
```

&nbsp;

## 9. GET /motorcycles/scoopy110

Description:

- Get motorcycle scoopy110 by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
[
  {
  "_id": "string",
        "brand": "string",
        "model": "string",
        "imageUrl": "string",
        "transmission": "string",
        "fuel": "string",
        "price": "integer",
        "status": "string",
        "__v": "integer"
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "status": "Invalid Token"
}
```

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "status": "Data not found"
}
```

&nbsp;

## 10. GET /motorcycles/nmax155

Description:

- Get motorcycle nmax155 by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
[
  {
  "_id": "string",
        "brand": "string",
        "model": "string",
        "imageUrl": "string",
        "transmission": "string",
        "fuel": "string",
        "price": "integer",
        "status": "string",
        "__v": "integer"
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "status": "Invalid Token"
}
```

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "status": "Data not found"
}
```

&nbsp;

## 11. GET /motorcycles/xmax300

Description:

- Get motorcycle xmax300 by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
[
  {
  "_id": "string",
        "brand": "string",
        "model": "string",
        "imageUrl": "string",
        "transmission": "string",
        "fuel": "string",
        "price": "integer",
        "status": "string",
        "__v": "integer"
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "status": "Invalid Token"
}
```

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "status": "Data not found"
}
```

&nbsp;

## 12. GET /motorcycles/primavera150

Description:

- Get motorcycle primavera150 by id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
[
  {
  "_id": "string",
        "brand": "string",
        "model": "string",
        "imageUrl": "string",
        "transmission": "string",
        "fuel": "string",
        "price": "integer",
        "status": "string",
        "__v": "integer"
  }
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "statusCode": 401,
  "status": "Invalid Token"
}
```

_Response (404 - Not Found)_

```json
{
  "statusCode": 404,
  "status": "Data not found"
}
```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

