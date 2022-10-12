## Endpoints

List of Available Endpoints:

- `POST /register`
- `POST /login`
- `GET /places`
- `GET /hotels`
- `GET /attractions`
- `GET /restaurants`
- `GET /covid`

### POST /register

#### Description

- Create a new user

#### Request

- Body
  ```json
  {
    "username"    : string,
    "email"       : string,
    "password"    : string,
    "role"        : string,
    "phoneNumber" : string,
    "address"     : string
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
    "message": string
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "message": String
  }
  ```

### POST /login

#### Description

- Login user

#### Request

- Body
  ```json
  {
  "email"       : string,
  "password"    : string,
  }
  ```

#### Response

_200 - Ok_

- Body
  ```json
  {
    "message"       : string,
    "access_token"  : string
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "message": String
  }
  ```
  _401 - Unauthorized_

```json
{
  "message": String
}
```

### GET /places

#### Description

- Get all the place data

#### Response

_200 - OK_

- Body

  ```json
  [
    {
        "result_type": String,
        "result_object": {
            "location_id": String,
            "name": String,
            "latitude": String,
            "longitude": String,
            "num_reviews": String,
            "timezone": String,
            "location_string": String,
            "photo": Obj,
            "awards": Array,
            "preferred_map_engine": String,
            "rating": String,
            "special_offers": Obj,
            "category": Obj,
            "address": String,
        },
        "scope": String,
        "is_top_result": Boolean,
    },
    ...
  ]
  ```

### GET /hotels

#### Description

- Get all the hotel data

#### Response

_200 - OK_

- Body

  ```json
  [
    {
        "location_id": String,
        "name": String,
        "latitude": String,
        "longitude": String,
        "num_reviews": String,
        "timezone": String,
        "location_string": String,
        "photo": Obj,
        "awards": Array,
        "preferred_map_engine": String,
        "rating": String,
        "price": String,
        "category": Obj,
        "address": String,
    },
    ...
  ]
  ```

### GET /attractions

#### Description

- Get all the attraction data

#### Response

_200 - OK_

- Body

  ```json
  [
    {
        "location_id": String,
        "name": String,
        "latitude": String,
        "longitude": String,
        "num_reviews": String,
        "timezone": String,
        "location_string": String,
        "photo": Obj,
        "awards": Array,
        "preferred_map_engine": String,
        "rating": String,
        "category": Obj,
        "address": String,
    },
    ...
  ]
  ```

### GET /restaurants

#### Description

- Get all the restaurant data

#### Response

_200 - OK_

- Body

  ```json
  [
    {
        "location_id": String,
        "name": String,
        "latitude": String,
        "longitude": String,
        "num_reviews": String,
        "timezone": String,
        "location_string": String,
        "photo": Obj,
        "awards": Array,
        "preferred_map_engine": String,
        "rating": String,
        "category": Obj,
        "address": String,
    },
    ...
  ]
  ```

### GET /covid

#### Description

- Get all the covid data

#### Response

_200 - OK_

- Body

  ```json
  [
    {
        {
            "get": String,
            "parameters": {
                "country": String,
            },
            "errors": Array,
            "results": Integer,
            "response": [
                {
                    "continent": String,
                    "country": String,
                    "population": Integer,
                    "cases": {
                        "new": String,
                        "active": Integer,
                        "critical": Integer,
                        "recovered": Integer,
                        "1M_pop": String,
                        "total": Integer,
                    },
                    "deaths": {
                        "new": String,
                        "1M_pop": String,
                        "total": Integer,
                    },
                    "tests": {
                        "1M_pop": String,
                        "total": Integer,
                    },
                    "day": Date,
                    "time": Date
                }
            ]
        }
    },
    ...
  ]
  ```
