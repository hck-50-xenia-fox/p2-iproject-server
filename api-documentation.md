# Football-iScore API Documentation

## Endpoints

List of Available Endpoints:

- `POST /register`
- `POST /login`
- `POST /login-google`
- `GET /live-score`
- `GET /premier-league`
- `GET /highlight`
- `GET /champions-league`

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
      "message": 
      [
        String
      ]
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
    "message": 
    [
      String
    ]
  }
  ```

### POST /login-google

#### Description

- Sign-in with Google

#### Request

- Body
  ```json
  {
    "google_token"    : string
  }
  ```

#### Response

_201 - Created_

- Body
  ```json
  {
    "access_token" : string,
    "username"     : string,
    "email"        : string,
  }
  ```

### GET /live-score

#### Description

- Get all live score football
#### Response

_200 - OK_

- Body

  ```json
  [
    {
      "date": String,
      "league": String,
      "country": String,
      "referee": String,
      "venue": String,
      "city": String,
      "minutes": Integer,
      "status": String,
      "homeTeam": String,
      "scoreHomeTeam": Integer,
      "homeTeamLogo": String,
      "awayTeam": String,
      "scoreAwayTeam": Integer,
      "awayTeamLogo": String,
    },
    ...
  ]
  ```

  _400 - Bad Request_

- Body
  ```json
  {
    "message": 
    [
      String
    ]
  }
  ```

### GET /premier-league

#### Description

- Get all the data of the Premier League matches 30 days ago and the next 30 days
#### Response

_200 - OK_

- Body

  ```json
  [
    {
      "date": String,
      "league": String,
      "country": String,
      "referee": String,
      "venue": String,
      "city": String,
      "minutes": Integer,
      "status": String,
      "homeTeam": String,
      "scoreHomeTeam": Integer,
      "homeTeamLogo": String,
      "awayTeam": String,
      "scoreAwayTeam": Integer,
      "awayTeamLogo": String,
    },
    ...
  ]
  ```

  _400 - Bad Request_

- Body
  ```json
  {
    "message": 
    [
      String
    ]
  }
  ```

### GET /highlight

#### Description

- Get recent football video highlights data
#### Response

_200 - OK_

- Body

  ```json
  [
    {
      "title": String,
      "url": String,
      "thumbnail": String,
      "date": String,
    },
    ...
  ]
  ```

  _400 - Bad Request_

- Body
  ```json
  {
    "message": 
    [
      String
    ]
  }
  ```

### GET /champions-league

#### Description

- Get all the data of the Champions League matches 30 days ago and the next 30 days
#### Response

_200 - OK_

- Body

  ```json
  [
    {
      "date": String,
      "league": String,
      "country": String,
      "referee": String,
      "venue": String,
      "city": String,
      "minutes": Integer,
      "status": String,
      "homeTeam": String,
      "scoreHomeTeam": Integer,
      "homeTeamLogo": String,
      "awayTeam": String,
      "scoreAwayTeam": Integer,
      "awayTeamLogo": String,
    },
    ...
  ]
  ```

  _400 - Bad Request_

- Body
  ```json
  {
    "message": 
    [
      String
    ]
  }
  ```

### Global Error

#### Response

_500 - Internal Server Error_

- Body
  ```json
  {
    "message": "Internal Server Error"
  }
  ```