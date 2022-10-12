 Hacktiv Course API Documentation

### Deployed server


## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /loginGoogle`
- `GET /nearby`


## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "username": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
    "id": "integer",
    "email": "string"
}
```


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
    "username": "string"
}
```


## 3. GET /nearby

Description:
- Get all nearby coffee shop from api google

_Response (200 - OK)_

```json
[
  {
    "id": "integer",
    "Location": {"lat": "integer", "lng": "integer"},
    "name": "strings",
    "rating": "string",
    "address": "string",
    "photos": "photos":
          [
            {
              "height": "integer",
              "html_attributions":
                [
                  'string',
                ],
              "photo_reference": "string",
              "width": "integer",
            },
          ],
  },
]
```