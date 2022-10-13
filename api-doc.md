## Endpoints

List of available endpoints

- `GET /memes`
- `POST /register/companies`
- `POST /login/managers`
- `POST /login/companies`
- `POST /login/employees`
- `POST /companies/addManager`
- `GET /companies/managers`
- `DELETE /companies/manager/:id`
- `GET /employees/mytasks`
- `PATCH /employees/mytasks/:taskId`
- `GET /managers/employees`
- `POST /managers/addEmployee`
- `GET /managers/tasks`
- `POST /managers/postTask`
- `POST /managers/employeeTasks`
- `DELETE /managers/:employeeId`

### GET /memes

#### Request

-headers

```json
`       {
          "X-RapidAPI-Key":
            "e43e110b70msh3ec1e2d38d14bd2p1661cbjsn0484a3490ad6",
          "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
        },
```

#### Response

_200 - OK_

```json
[
    {
        "id": 5584,
        "created": "2022-10-12T04:47:13.881085Z",
        "modified": "2022-10-12T04:47:13.881117Z",
        "image": "https://sgp1.vultrobjects.com/kaushal-meme-api/meme_api_prod/memes/4845.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=31MV23N3G46Q2UG2RT1V%2F20221013%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20221013T030323Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=bac2e38d5a4854a217b98dee16d9202413ad54205f7f930a86dfa11a71f268f7",
        "tags": null,
        "upvotes": 0,
        "downvotes": 0
    },
    {
        "id": 1695,
        "created": "2022-10-12T04:03:27.262180Z",
        "modified": "2022-10-12T04:03:27.262212Z",
        "image": "https://sgp1.vultrobjects.com/kaushal-meme-api/meme_api_prod/memes/11087.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=31MV23N3G46Q2UG2RT1V%2F20221013%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20221013T030323Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0320556f1a8d67ba848b5872b5a3360581f851f257c5021cbefe9a03a477d93f",
        "tags": null,
        "upvotes": 0,
        "downvotes": 0
    },
    {
        "id": 8199,
        "created": "2022-10-12T05:26:35.404148Z",
        "modified": "2022-10-12T05:26:35.404191Z",
        "image": "https://sgp1.vultrobjects.com/kaushal-meme-api/meme_api_prod/memes/7105.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=31MV23N3G46Q2UG2RT1V%2F20221013%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20221013T030323Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a29c18ef13c299291ec0a174a01783bfbd4e9f4141cf23d4e5b2a2ef5ee766c2",
        "tags": null,
        "upvotes": 0,
        "downvotes": 0
    },
    {
        "id": 1497,
        "created": "2022-10-12T04:00:37.980739Z",
        "modified": "2022-10-12T04:00:37.980769Z",
        "image": "https://sgp1.vultrobjects.com/kaushal-meme-api/meme_api_prod/memes/10908.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=31MV23N3G46Q2UG2RT1V%2F20221013%2Fsgp1%2Fs3%2Faws4_request&X-Amz-Date=20221013T030323Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=290471026acb8d8e7ebc860c27ef744447a13833e87d774e3f6bfb3fe6f4a262",
        "tags": null,
        "upvotes": 0,
        "downvotes": 0
    },
    ...
]
```

### POST /register/companies

#### Request

-body

```json
{
    "name" : string,
    "companyEmail" : string,
    "companyPassword" : string,
}
```

#### Response

_201 - CREATED_

```json
{
  "message": "Success register company email <companyEmail>"
}
```

_400 - Bad Request_

```json
{
  "message": "companyName is required "
}
OR
{
    "message" : "Email is required"
}
OR
{
    "message" : "Password is required"
}
OR
{
    "message " : "Email must be unique"
}
OR
{
    "message " : "Invalid Email Format"
}
OR
{
    "message " : "Password minimum 5 character"
}
```

### POST /login/companies

#### Request

-body

```json
{
    "email" : string,
    "password" : string
}
```

#### Response

_200 - OK_

```json
{
    "access_token" : string
}
```

_400 - BAD REQUEST_

```json
{
  "message": "Email is required"
}
OR
{
    "message" : "Password is required"
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid email or password"
}
```

### POST /login/managers

#### Request

-body

```json
{
    "email" : string,
    "password" : string
}
```

#### Response

_200 - OK_

```json
{
    "access_token" : string
}
```

_400 - BAD REQUEST_

```json
{
  "message": "Email is required"
}
OR
{
    "message" : "Password is required"
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid email or password"
}
```

### POST /login/employees

#### Request

-body

```json
{
    "email" : string,
    "password" : string
}
```

#### Response

_200 - OK_

```json
{
    "access_token" : string
}
```

_400 - BAD REQUEST_

```json
{
  "message": "Email is required"
}
OR
{
    "message" : "Password is required"
}
```

_401 - Unauthorized_

```json
{
  "message": "Invalid email or password"
}
```

### POST /companies/addManager

#### Request

-body

```json
{
    "firstName" : string,
    "lastName" : string,
    "role" : string,
    "email" : string,
    "password" :  string
}
```

-headers

```json
{
  "access_token" : string
}
```

#### Response

_201 -Created_

```json
{
  "message": "Success register manager email <managerEmail>"
}
```

_400 - Bad Request_

```json
{
    "message" : "firstName is required"
}
OR
{
    "message" : "role is required"
}
OR
{
    "message" : "Email is required"
}
OR
{
    "message" : "Password is required"
}
OR
{
    "message " : "Email must be unique"
}
OR
{
    "message " : "Invalid Email Format"
}
OR
{
    "message " : "Password minimum 5 character"
}
```

### GET /companies/managers

#### Request

-headers

```json
{
    "access_token" : string
}
```

#### Response

_200 - OK_

```json
[
  {
    "id": 3,
    "firstName": "Bambang",
    "lastName": "",
    "role": "Javascript Dev",
    "email": "bambang@gmail.com",
    "password": "$2a$10$OnijHpjZrJ18RLYPNVI1vujaJ2nAHUH7W42EqptfG2BYdMaSVMrz2",
    "CompanyId": 1,
    "createdAt": "2022-10-13T02:06:21.380Z",
    "updatedAt": "2022-10-13T02:06:21.380Z",
    "Employees": [
      {
        "id": 3,
        "firstName": "Joni",
        "lastName": "Bambang",
        "role": "Quality Ansurance",
        "email": "a@mail.com",
        "password": "$2a$10$cFfwpzbpHbbCkBUscqvlVes1DO/MWFpeRUi.Jhtx0gYki6jX9gAOG",
        "ManagerId": 3,
        "CompanyId": 1
      },
      {
        "id": 4,
        "firstName": "Bambang",
        "lastName": "Alifandi",
        "role": "Javascript Dev",
        "email": "b@mail.com",
        "password": "$2a$10$v7w9nREv5Et4KYiuNlK.u.XYObcWba4g.0ZrDOMMCIvEcufoJEYQy",
        "ManagerId": 3,
        "CompanyId": 1
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Krisna",
    "lastName": "Alifandi",
    "role": "CTO",
    "email": "a@mail.com",
    "password": "$2a$10$FOwZkOqPbieejCb08QGDee/VKCyu6s9f6IzqJ9RHCXyz53WLdi8bu",
    "CompanyId": 1,
    "createdAt": "2022-10-12T23:41:34.739Z",
    "updatedAt": "2022-10-12T23:41:34.739Z",
    "Employees": []
  },
  {
    "id": 4,
    "firstName": "Mang",
    "lastName": "Alifandi",
    "role": "Javascript Dev",
    "email": "de@mail.com",
    "password": "$2a$10$65lznIIOmQ4L2KWpfFggjuljo4MhCTDfDxDX8BKq8TYD5Ti.svP3G",
    "CompanyId": 1,
    "createdAt": "2022-10-13T02:06:56.764Z",
    "updatedAt": "2022-10-13T02:06:56.764Z",
    "Employees": []
  }
]
```

### DELETE /companies/manager/:id

#### Request

-headers

```json
{
    "access_token" : string
}
```

#### Response

_200 -OK_

```json
{
  "message": "Success deleted manager with id <id>"
}
```

_404 - Not Found_

```json
{
  "message": "Data not found"
}
```

### GET /employees/mytasks

#### Request

-headers

```json
{
    "access_token" : string
}
```

#### Response

_200 -OK_

```json
[
  {
    "EmployeeId": 3,
    "TaskId": 2,
    "status": "Uncomplete",
    "createdAt": "2022-10-13T02:46:50.830Z",
    "updatedAt": "2022-10-13T02:46:50.830Z",
    "Task": {
      "id": 2,
      "title": "Making Website",
      "description": "Making Website",
      "createdAt": "2022-10-13T02:11:45.535Z",
      "updatedAt": "2022-10-13T02:11:45.535Z"
    }
  }
]
```

### PATCH /employees/mytasks/:taskId

#### Request

-headers

```json
{
    "access_token" : string
}
```

#### Response

_200 - OK_

```json
{
  "message": "Successfully Assign task!"
}
```

_404 -Not Found_

```json
{
  "message": "Data not found"
}
```

### POST /managers/addEmployee

#### Request

-headers

```json
{
    "access_token" : string
}
```

-body

#### Request

-body

```json
{
    "firstName" : string,
    "lastName" : string,
    "role" : string,
    "email" : string,
    "password" :  string
}
```

-headers

```json
{
  "access_token" : string
}
```

#### Response

_201 -Created_

```json
{
  "message": "Success register employee email <employeeEmail>"
}
```

_400 - Bad Request_

```json
{
    "message" : "firstName is required"
}
OR
{
    "message" : "role is required"
}
OR
{
    "message" : "Email is required"
}
OR
{
    "message" : "Password is required"
}
OR
{
    "message " : "Email must be unique"
}
OR
{
    "message " : "Invalid Email Format"
}
OR
{
    "message " : "Password minimum 5 character"
}
```

### GET /managers/tasks

#### Request

-headers

```json
{
    "access_token" :  string
}
```

#### Response

_200 -OK_

```json
[
  {
    "id": 4,
    "firstName": "Bambang",
    "lastName": "Alifandi",
    "role": "Javascript Dev",
    "email": "b@mail.com",
    "password": "$2a$10$v7w9nREv5Et4KYiuNlK.u.XYObcWba4g.0ZrDOMMCIvEcufoJEYQy",
    "ManagerId": 3,
    "CompanyId": 1,
    "createdAt": "2022-10-13T02:11:27.231Z",
    "updatedAt": "2022-10-13T02:11:27.231Z",
    "Tasks": [
      {
        "id": 1,
        "title": "Fixing Bugs",
        "description": "Fixing Bugs",
        "EmployeeTask": {
          "EmployeeId": 4,
          "TaskId": 1,
          "status": "Uncomplete",
          "createdAt": "2022-10-13T02:11:53.413Z",
          "updatedAt": "2022-10-13T02:11:53.413Z"
        }
      },
      {
        "id": 2,
        "title": "Making Website",
        "description": "Making Website",
        "EmployeeTask": {
          "EmployeeId": 4,
          "TaskId": 2,
          "status": "Uncomplete",
          "createdAt": "2022-10-13T02:46:54.965Z",
          "updatedAt": "2022-10-13T02:46:54.965Z"
        }
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Joni",
    "lastName": "Bambang",
    "role": "Quality Ansurance",
    "email": "a@mail.com",
    "password": "$2a$10$cFfwpzbpHbbCkBUscqvlVes1DO/MWFpeRUi.Jhtx0gYki6jX9gAOG",
    "ManagerId": 3,
    "CompanyId": 1,
    "createdAt": "2022-10-13T02:11:10.979Z",
    "updatedAt": "2022-10-13T02:11:10.979Z",
    "Tasks": [
      {
        "id": 2,
        "title": "Making Website",
        "description": "Making Website",
        "EmployeeTask": {
          "EmployeeId": 3,
          "TaskId": 2,
          "status": "Completed",
          "createdAt": "2022-10-13T02:11:59.709Z",
          "updatedAt": "2022-10-13T02:12:22.923Z"
        }
      }
    ]
  }
]
```

### GET /managers/tasks

#### Request

-headers

```json
{
  "access_token" : string
}
```

#### Response

_200 - OK_

```json
[
  {
    "id": 1,
    "title": "Fixing Bugs",
    "description": "Fixing Bugs",
    "createdAt": "2022-10-13T02:07:56.254Z",
    "updatedAt": "2022-10-13T02:07:56.254Z"
  },
  {
    "id": 2,
    "title": "Making Website",
    "description": "Making Website",
    "createdAt": "2022-10-13T02:11:45.535Z",
    "updatedAt": "2022-10-13T02:11:45.535Z"
  }
]
```

### POST /managers/postTask

#### Request

-headers

```json
{
    "access_token" : string
}
```

-body

```json
{
    "EmployeeId" : integer,
    "TaskId" : integer
}
```

#### Response

_201 - Created_

```json
{
  "message": "Successfully added task to employee with id  <employeeId>"
}
```

### DELETE /managers/:employeeId

#### Request

-headers

```json
{
    "access_token" : string
}
```

#### Response

_200 - OK_

```json
{
  "message": "Success fired employee"
}
```

#### Global Error

_401 - Unauthorized_

```json
{
  "message": "Invalid Token"
}
OR
{
    "message" : "Please Login First!"
}
```

_403 - Forbidden_

```json
{
  "message": "Forbidden"
}
```

_500 -Internal Server Error_

```json
{
  "message": "Internal server error"
}
```
