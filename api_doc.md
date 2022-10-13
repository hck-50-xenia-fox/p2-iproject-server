# API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /chessProfile`
- `GET /chessStats`
- `GET /top10Player`
- `GET /getStreamer`
- `GET /getPuzzle`
- `GET /youtube`
- `GET /youtube-detail/:streamId'`
- `GET /lichess`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "status": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "username": "string",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "string"
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
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "string"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "string"
}
```

&nbsp;

## 3. GET /chessProfile

Description:

- Get profile chess.com

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "data": "string",
  "status": "string"
}
```

## 4. GET /chessStats

Description:

- Get stats chess.com

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
 {
    "data" : "string"
  },
  ...,

}

```

&nbsp;

## 5. GET /top10Player

Description:

- get 10 worldaRank player

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
    "data": "object"
  }
]
```

&nbsp;

## 6. GET /getStreamer

Description:

- Get streamer data

_Response (200 - Ok)_

```json
[
  {
    "data": "object"
  }
]
```

&nbsp;

&nbsp;

## 7. GET /getPuzzle

Description:

- Get chess puzzle

_Response (200 - Ok)_

```json
[
  {
    "data": "object"
  }
]
```

&nbsp;

## 8. GET /youtube

Description:

- Get youtube data about chess

_Response (200 - Ok)_

```json
[
  {
    "data": "object"
  }
]
```

&nbsp;

## 9. GET /youtube-detail/:streamId

Description:

- Get spesific youtube video

_Response (200 - Ok)_

```json
{
  "data": "object"
}
```

&nbsp;

## 10. GET /lichess

Description:

- Get lichess profile

- headers:

```json
{
  "lichesstoken": "string"
}
```

_Response (200 - Ok)_

```json
{
  "data": "object"
}
```
