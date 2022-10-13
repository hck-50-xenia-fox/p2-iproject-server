## Endpoints

List of Available Endpoints:

- `POST /users/register`
- `POST /users/login`
- `POST /users/getHistory`

- `GET /youtube/search/:search`
- `GET /youtube/videoDetail/:id`
- `GET /youtube/comments/:id`
- `GET /youtube/channelDetail/:id`
- `GET /youtube/channelVideos/:id`
- `GET /youtube/movieTrailer`
- `GET /youtube/reactJS`

## 1. POST /users/register

#### Description

- Create a new user data

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
      "id": Integer,
      "username": "String",
      "email": "String",
      "password": "String",
      "address": "String",
      "createdAt": Date,
      "updatedAt": Date
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
    "id": Integer,
    "email": "String"
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "message": "String"
  }
  ```

## 2. POST /users/login

#### Description

- Login

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
    "email": "String",
    "password": "String"
  }
  ```

#### Response

_200 - Ok_

- Body
  ```json
  {
    "X-RapidAPI-Key": "string",
    "X-RapidAPI-Host": "String",
    "username": "String"
  }
  ```

_400 - Bad Request_

- Body
  ```json
  {
    "message": "String"
  }
  ```

_404 - Data Not Found_

- Body
  ```json
  {
    "message": "String"
  }
  ```
  ``

## 3. GET /search/:search

#### Description

- Get a youtube data based on given params search

#### Request

- Headers
  ```json
  {
    "X-RapidAPI-Key": "String",
    "X-RapidAPI-Host": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "data": [
      {
        "avatarUrl": "String",
        "type": "String",
        "canonicalBaseUrl": "String",
        "channelId": "String",
        "titleChannel": "String",
        "description": "String",
        "createdAtthumbnailUrl": "String",
        "views": "String",
        "videoId": "String",
        "titleVideo": "String",
      },
      ...
    ]
  }
  ```

## 4. GET /videoDetail/:id

#### Description

- Get a video detail youtube data based on given params id

#### Request

- Headers
  ```json
  {
    "X-RapidAPI-Key": "String",
    "X-RapidAPI-Host": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "data": [
      {
        "avatar": "String",
        "channelId": "String",
        "subcribers": "String",
        "titleChannel": "String",
        "category": "String",
        "decsription": "String",
        "thumbnail": "String",
        "videoId": "String",
        "titleVideo": "String",
        "release": "String",
        "totalComment": Integer,
        "totalLike": Integer,
        "totalViews": Integer,
      },
      ...
    ]
  }
  ```

## 5. GET /comments/:id

#### Description

- Get comments youtube data based on given params id

#### Request

- Headers
  ```json
  {
    "X-RapidAPI-Key": "String",
    "X-RapidAPI-Host": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "data": [
      {
        "avatarUrl": "String",
        "name": "String",
        "comment": "String",
        "commentId": "String",
        "titleChannel": "String",
        "publishedTimeText": "String",
      },
      ...
    ]
  }
  ```

## 6. GET /channelDetail/:id

#### Description

- Get channel detail youtube data based on given params id

#### Request

- Headers
  ```json
  {
    "X-RapidAPI-Key": "String",
    "X-RapidAPI-Host": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "data": [
      {
        "avatar": "String",
        "banner": "String",
        "canonicalBaseUrl": "String",
        "channelId": "String",
        "country": "String",
        "joinDate": "String",
        "description": "String",
        "title": "String",
        "subcribers": "String",
        "views": Integer,
      },
      ...
    ]
  }
  ```

## 7. GET /channelVideos/:id

#### Description

- Get channel videos youtube data based on given params id

#### Request

- Headers
  ```json
  {
    "X-RapidAPI-Key": "String",
    "X-RapidAPI-Host": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "data": [
      {
        "avatarUrl": "String",
        "type": "String",
        "canonicalBaseUrl": "String",
        "channelId": "String",
        "titleChannel": "String",
        "description": "String",
        "createdAtthumbnailUrl": "String",
        "views": "String",
        "videoId": "String",
        "titleVideo": "String",
        "date": "String",
      },
      ...
    ]
  }
  ```

## 8. GET /movieTrailer/

#### Description

- Get movie Trailer videos in youtube

#### Request

- Headers
  ```json
  {
    "X-RapidAPI-Key": "String",
    "X-RapidAPI-Host": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "data": [
      {
        "avatarUrl": "String",
        "type": "String",
        "canonicalBaseUrl": "String",
        "channelId": "String",
        "titleChannel": "String",
        "description": "String",
        "createdAtthumbnailUrl": "String",
        "views": "String",
        "videoId": "String",
        "titleVideo": "String",
      },
      ...
    ]
  }
  ```

## 9. GET /reactJs/

#### Description

- Get React JS videos in youtube

#### Request

- Headers
  ```json
  {
    "X-RapidAPI-Key": "String",
    "X-RapidAPI-Host": "String"
  }
  ```

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "data": [
      {
        "avatarUrl": "String",
        "type": "String",
        "canonicalBaseUrl": "String",
        "channelId": "String",
        "titleChannel": "String",
        "description": "String",
        "createdAtthumbnailUrl": "String",
        "views": "String",
        "videoId": "String",
        "titleVideo": "String",
      },
      ...
    ]
  }
  ```

## 9. GET /users/getHistory

#### Description

- Get data history

#### Response

_200 - OK_

- Body
  ```json
  {
    "statusCode": 200,
    "data": [
      {
        "id" : Integer,
        "name" : "String",
        "description" : "String",
        "createdAt" : Date,
        "updatedAt" : Date
      },
      ...
    ]
  }
  ```

## Global Error

#### Response

- Body

  ```json
  {
    "message": "Internal Server Error"
  }
  ```
