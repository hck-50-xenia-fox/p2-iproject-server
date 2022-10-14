- `POST/register`
- `POST/login`
 -`GET /Course`
- `GET /Course/:courseId`
- `POST /mycourse/:courseId`
- `GET/mycourse`


## POST /register

### Description

- Register customer

### Request

- Headers

```json
{
  "Content-Type": "application/x-www-form-urlencoded"
}
```

- Body

```json
{
    "username": String,
    "email": String,
    "password": String,
    "phoneNumber": String,
    "address": String,
},
```

### Response

_201 - Created_

- Body

```json
{
     code: 201,
        username: data.username,
        email: data.email,
}
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
### POST /login

#### Description

- login

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
    "email": String,
    "password":String
  }
  ```

#### Response

_200 - Created_

- Body

  ```json
  {
    "access_token": String

  }
  ```

_401 - Unauthorized_

- Body
  ```json
  {
    "statusCode": 401,
    "error": {
      "message": String
    }
  }
  ```
  ## GET /course

### Description

- Show all of the data detail

### Request

- Headers

```json
{
    access_token: String
}
```

### Response

_200 - OK_

- Body

```json
{
    "data": [
      {
          "id": Integer,
          "name": String,
          "description": String,
          "price": Integer,
          "createdAt": Date,
          "updatedAt": Date,
      },
    ]
}
```
## GET /course/:courseId

### Description

- Show one of the data detail on courseId

### Request

- Headers :

```json
{
    access_token: String
}
```

### Response

_200 - OK_

- Body

```json
{
    "id": Integer,
    "name": String,
    "description": String,
    "price": Integer,
    "createdAt": Date,
    "updatedAt": Date,
    "User": {
        "id": Integer,
        "username": String,
        "email": String,
        "createdAt": Date,
        "updatedAt": Date
    }
},
```

_404 - Not Found_

- Body

```json
{
  "statusCode": 404,
  "error": {
    "message": String
  }
}
```
## POST /mycourse

### Description

- Show all of the my course

### Request

- Headers

```json
{
    access_token: String
}
```

### Response

_200 - OK_

- Body

```json
{
    "id": Integer,
    "UserId": Integer,
    "CourseId": Integer,
    "createdAt": Integer,
    "updatedAt": Integer
    "Course": {
        "id": Integer,
        "name": String,
        "description": String,
        "price": Integer,
        "createdAt": Integer,
        "updatedAt": Integer
    }
}
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

## POST /payment

### Description

- Show transaction

### Request

- Headers

```json
{
    access_token: String
}
```

### Response

_200 - OK_

- Body

```json
{
    transactionToken: integer
}
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
## GET /mycourse/:courseId

### Description

- Show all of the course detail

### Request

- Headers

```json
{
    access_token: String
}
```

### Response

_200 - OK_

- Body

```json
{
    "data": [
              {
            "id": Integer,
            "UserId": Integer,
            "CourseId": Integer,
            "createdAt": Integer,
            "updatedAt": Integer
            "Course": {
                "id": Integer,
                "name": String,
                "description": String,
                "price": Integer,
                "createdAt": Integer,
            "updatedAt": Integer
            }
        }
    ]
}
```

_403 - Forbidden_

- Body

```json
{
  "statusCode": 403,
  "error": {
    "message": String
  }
}
```

_404 - Not Found_

- Body

```json
{
  "statusCode": 404,
  "error": {
    "message": String
  }
}
```