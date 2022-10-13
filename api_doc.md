# API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `PUT /users`
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
  "message": "your account is now registered, Trainer."
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

## 3. PUT /users

### Description

- Update users profile

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
  "username": STRING,
  "email": STRING,
  "photo": STRING,
}
```

### Response

_200 - OK_

- Body

```json
{
  "message": "Your profile has been updated successfully"
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
        "Photo is required",
        OR
        "Username is required",
    ]
}
```

_404 - Not Found_

- Body

```json
{
    "message": "User's profile with this ID is registered"

    OR

    {
    "message": "Account is not registered"
}
}
```

_401 - Unauthorized_

- Body

```json
{
    "message": "User is not logged in"
}

OR


{
    "message": "Invalid Token"
}
```

## 4. GET /pokemons

### Description

- Get all pokemons data

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
        "idPokedex": INTEGER,
        "name": STRING,
        "description": STRING,
        "sexMalePorcentage": INTEGER,
        "sexFemalePorcentage": INTEGER,
        "undefinedPorcentage": INTEGER,
        "stats": {
            "hp": INTEGER,
            "attack": INTEGER,
            "defense": INTEGER,
            "specialAttack": INTEGER,
            "specialDefense": INTEGER,
            "speed": INTEGER,
            "height": INTEGER,
            "weight": INTEGER,
            "types": {
                "name": {
                    "type1": STRING,
                    "type2": STRING,
                },
                "weakness": {
                    "damageDoubleFrom": [
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        }
                    ],
                    "damageDoubleTo": [
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        }
                    ],
                    "halfDamageFrom": [
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url":STRING,
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        }
                    ],
                    "halfDamageTo": [
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        }
                    ],
                    "noDamageFrom": ARRAY,
                    "noDamegeTo": [
                        {
                            "name": STRING,
                            "url": STRING
                        }
                    ]
                }
            }
        },
        "image": {
            "default": STRING,
            "UrlMaleOrUndefined": STRING,
            "UrlShiny": STRING
        },
        "color": {
            "name": STRING,
            "url": STRING
        },
        "habitat": {
            "name": STRING,
            "url": STRING
        },
        "generation": {
            "name": STRING,
            "url": STRING
        }
    },
    ...
```

_404 - Not Found_

- Body

```json
{
    "message": "User's profile with this ID is registered" 
}
    OR
{
    "message": "Account is not registered"
}
```

_401 - Unauthorized_

- Body

```json
{
    "message": "User is not logged in"
}
    OR
{
    "message": "Invalid Token"
}
```

## 5. GET /pokemons/:name

### Description

- Get pokemon detail by name

### Request

- Params

```json
{
  "name": STRING
}
```

### Response

_200 - OK_

- Body

```json
{
        "idPokedex": INTEGER,
        "name": STRING,
        "description": STRING,
        "sexMalePorcentage": INTEGER,
        "sexFemalePorcentage": INTEGER,
        "undefinedPorcentage": INTEGER,
        "stats": {
            "hp": INTEGER,
            "attack": INTEGER,
            "defense": INTEGER,
            "specialAttack": INTEGER,
            "specialDefense": INTEGER,
            "speed": INTEGER,
            "height": INTEGER,
            "weight": INTEGER,
            "types": {
                "name": {
                    "type1": STRING,
                    "type2": STRING,
                },
                "weakness": {
                    "damageDoubleFrom": [
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        }
                    ],
                    "damageDoubleTo": [
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        }
                    ],
                    "halfDamageFrom": [
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url":STRING,
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        }
                    ],
                    "halfDamageTo": [
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        },
                        {
                            "name": STRING,
                            "url": STRING
                        }
                    ],
                    "noDamageFrom": ARRAY,
                    "noDamegeTo": [
                        {
                            "name": STRING,
                            "url": STRING
                        }
                    ]
                }
            }
        },
        "image": {
            "default": STRING,
            "UrlMaleOrUndefined": STRING,
            "UrlShiny": STRING
        },
        "color": {
            "name": STRING,
            "url": STRING
        },
        "habitat": {
            "name": STRING,
            "url": STRING
        },
        "generation": {
            "name": STRING,
            "url": STRING
        }
    },
    ...
```

_404 - Not Found_

- Body

```json
{
    "message": "User's profile with this ID is registered"
}
    OR
{
    "message": "Account is not registered"
}
    OR
{
    "message": "Sorry, the name of the pokemon you are looking for does'nt exist"
}
```

_401 - Unauthorized_

- Body

```json
{
    "message": "User is not logged in"
}
    OR
{
    "message": "Invalid Token"
}
```

## 6. GET /questions

### Description

- Get all questions

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
        "description": STRING,
        "choice1": STRING,
        "choice2": STRING,
        "choice3": STRING,
        "choice4": STRING,
        "answer": STRING,
        "createdAt": DATE,
        "updatedAt": DATE,
    }
    ...
]
```
_404 - Not Found_

- Body

```json
{
    "message": "Account is not registered"
}
```

_401 - Unauthorized_

- Body

```json
{
    "message": "User is not logged in"
}
    OR
{
    "message": "Invalid Token"
}
```

## 7. POST /questions

### Description

- Add new questions

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
  "description": STRING,
  "choice1" : STRING,
  "choice2" : STRING,
  "choice3" : STRING,
  "choice4" : STRING,
  "answer" : STRING
}
```

### Response

_201 - CREATED_

```json
{
  "message": "Your question has been accommodated, thank you for your participation."
}
```

_400 - Bad Request_

- Body

```json
{
    "msg":
    [
        "Question description is required",
        OR
        "Choices is required",
        OR
        "The answers that are filled out do not match the choices given",
    ]
}
```

_404 - Not Found_

- Body

```json
{
    "message": "Account is not registered"
}
```

_401 - Unauthorized_

- Body

```json
{
    "message": "User is not logged in"
}
    OR
{
    "message": "Invalid Token"
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
