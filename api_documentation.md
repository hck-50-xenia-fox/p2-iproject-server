router.use(UserRouter);

1. post /register
2. post /login
3. get /stock
4. Post /stock
5. get stock/:id"

## 1 Post /register

Description : add User to table

# Request

# body

```js
{
"email": STRING,
"companyName": STRING,
"password": STRING,
"address": STRING,
}
```

# Response 200 - OK

```js
{
    "id": INTEGER,
    "email": STRING,
    "companyName": STRING,
    "password": STRING,
    "address": STRING,
    "updatedAt": DATE,
    "createdAt": DATE,
}
```

# Response 400 Bad Request

```js
{
    "message": "please fill the email"
}
OR
{
    "message": "please fill with email format"
}
OR
{
    "message": "Please fill the CompanyName"
}
{
    "message": "Please fill the Password"
}
{
    "message": "Please fill the Address"
}
```

# response 400 Bad Request

```js
{
"message" :"ACCOUNT_HAS_ALREADY_BEEN_CREATED"
}

```

# response 500 Internal Service Error

```js
{
    "message": "INTERNAL_SERVICE_ERROR"
}
```

## 2. post("/login");

# Request:

# Body :

```js
{
  email: STRING;
  password: STRING;
}
```

# response 200 - OK

```js
{
  "access_token" : STRING,
}

```

# response 401 - Unauthorized

```js
{
  "message" = "ERROR_INVALID_EMAIL_OR_PASSWORD";
}
```

# response 500 Internal Service Error

```js
{
    "message": "INTERNAL_SERVICE_ERROR"
}
```

# 3 get /stock

Description : Get Data to Table stock

# request

# headers :

```js
{
  "access_token": "string"
}
```

# response 200 OK

```js
[];
```

# response 401 Unauthorized

```js
{
    "message": "PLEASE_LOGIN"
}
```

# response 401 Unauthorized

```js
{
    "message": "INVALID_TOKEN"
}

```

# response 500 Internal Service Error

```js
{
    "message": "INTERNAL_SERVICE_ERROR"
}
```

## 4 Post /stock

Description : add Data to Table Inventory

# Request:

# headers :

```js
{
  "access_token": "string"
}
```

# body

```js
{
    productName: STRING,
    supplierNameS STRING,
    quantity: INTEGER,
    pricePerItem:INTEGER,
    rev: STRING }
```

# response 201 created

```js
{
   "message": "Purchase Kopi Gajah from PT Jamaica with item Id 5 success record"
}
```

# response 400 Bad Request

```js
{
  "message": "Rev Has Already Used"
}

```

# response 401 Unauthorized

```js
{
    "message": "PLEASE_LOGIN"
}
```

# response 401 Unauthorized

```js
{
    "message": "INVALID_TOKEN"
}

```

# response 500 Internal Service Error

```js
{
    "message": "INTERNAL_SERVICE_ERROR"
}
```

## 5.get stock/:id"

Description : Edit entire selected stock data

# request :

# headers :

```js
{
  "access_token": "string"
}
```

# Params :

```js
{
  "id": "integer(required)"
}
```

# response 200 OK

```js
{
    "id": INTEGER,
    "productName": STRING,
    "supplierName": STRING,
    "quantity": INTEGER,
    "pricePerItem": INTEGER,
    "UserId": INTEGER,
    "rev": STRING,
    "createdAt": DATE,
    "updatedAt": DATE
}
```

# response 401 Unauthorized

```js
{
    "message": "PLEASE_LOGIN"
}
```

# response 401 Unauthorized

```js
{
    "message": "INVALID_TOKEN"
}

```

# response 403 FORBIDDEN

```js
{
  "message": "FORBIDDEN"
}
```

# response 404 Not Found

```js
{
    "message":"ERROR_NOT_FOUND"
}
```

# response 500 Internal Service Error

```js
{
    "message": "INTERNAL_SERVICE_ERROR"
}
```

5. put("/:id", InventoryController.EditPurchase);
# 6. delete /stock/:id"
# request :

# headers :

```js
{
  "access_token": "string"
}
```

# Params :

```js
{
  "id": "integer(required)"
}
```

# response 200 OK

```js
{
    "id": INTEGER,
    "productName": STRING,
    "supplierName": STRING,
    "quantity": INTEGER,
    "pricePerItem": INTEGER,
    "UserId": INTEGER,
    "rev": STRING,
    "createdAt": DATE,
    "updatedAt": DATE
}
```

# response 401 Unauthorized

```js
{
    "message": "PLEASE_LOGIN"
}
```

# response 401 Unauthorized

```js
{
    "message": "INVALID_TOKEN"
}

```

# response 403 FORBIDDEN

```js
{
  "message": "FORBIDDEN"
}
```

# response 404 Not Found

```js
{
    "message":"ERROR_NOT_FOUND"
}
```

# response 500 Internal Service Error

```js
{
    "message": "INTERNAL_SERVICE_ERROR"
}
```

use("/invoice", InvoiceRouter);

8. get("/", InvoiceController.getAllInvoice);
   9.post("/", InvoiceController.addInvoice);
9. get("/generate/:id", InvoiceController.generateInvoice);
10. post("/payment/:id", InvoiceController.generatePayment);
11. get("/:id", InvoiceController.getTargetInvoice);
    13.delete("/:id", InvoiceController.deleteInvoice);

## 12 get "/history"

Description : Get Data to Table history

# request

# headers :

```js
{
  "access_token": "string"
}
```

# response 200 OK

```js
[
  {
    id: 10,
    expense: 30000000,
    revenue: null,
    description: "Purchase Kopi Gajah from PT Jamaica",
    type: "Purchase",
    UserId: 2,
    InventoryId: 5,
    InvoiceId: null,
    rev: "PURC-002",
    createdAt: "2022-10-13T03:49:18.047Z",
    updatedAt: "2022-10-13T03:49:18.047Z",
  },
];
```

# response 401 Unauthorized

```js
{
    "message": "PLEASE_LOGIN"
}
```

# response 401 Unauthorized

```js
{
    "message": "INVALID_TOKEN"
}

```

# response 500 Internal Service Error

```js
{
    "message": "INTERNAL_SERVICE_ERROR"
}
```

## 13. get history/report

# request

# headers :

```js
{
  "access_token": "string"
}
```

# response 200 OK

```js
{
    "totalExpense": 30000000,
    "totalRevenue": null,
    "grossProfit": -30000000
}
```

# response 401 Unauthorized

```js
{
    "message": "PLEASE_LOGIN"
}
```

# response 401 Unauthorized

```js
{
    "message": "INVALID_TOKEN"
}

```

# response 500 Internal Service Error

```js
{
    "message": "INTERNAL_SERVICE_ERROR"
}
```
