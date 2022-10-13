List of available endpoints:

- `POST /users/register`
- `POST /users/login`
- `POST /users/google-login`
- `POST /users/admin-register`

routes below needs authentication

- `POST /midtrans/pay`

## 1. POST /register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": ["Email is required", "Password is required"]
}
```

&nbsp;

## 2. POST /google-login

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
  "userId": "integer",
  "role": "string",
  "name": "string"
}
```

&nbsp;

## 3. POST /login

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
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJ1c2VyNDRAbWFpbC5jb20iLCJuYW1lIjoidXNlcjMiLCJmdWxsTmFtZSI6InVzZXIgMyIsImlhdCI6MTY2NTY1NTM3Nn0.EzsX3CN3Ig1Za_2ECdjbCn9ayGAztpZ8rIpgB85gQc8",
  "userId": 7,
  "role": "User",
  "name": "user3",
  "status": "Free"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
OR
{
    "message": [
        "Email is required",
        "Password is required"
    ]
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 4. POST /midtrans/pay

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (201 - Created)_

```json
{
  "token": "cf6fefde-1f47-4db9-a739-38238a987507",
  "redirect_url": "https://app.sandbox.midtrans.com/snap/v3/redirection/cf6fefde-1f47-4db9-a739-38238a987507"
}
```

&nbsp;

## 5. GET /books

Request:

- query:

```json
{
  "start": "integer"
}
```

_Response (200 - OK)_

```json
{
  "totalPages": 4,
  "currentPage": 3,
  "totalItems": 20,
  "items": [
    {
      "kind": "books#volume",
      "id": "eCj3cKC_3ikC",
      "etag": "sJhUegNS5z0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/eCj3cKC_3ikC",
      "volumeInfo": {
        "title": "Automated Planning",
        "subtitle": "Theory and Practice",
        "authors": [
          "Malik Ghallab",
          "Dana Nau",
          "Paolo Traverso"
        ],
        "publisher": "Elsevier",
        "publishedDate": "2004-05-17",
        "description": "Publisher Description",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781558608566"
          },
          {
            "type": "ISBN_10",
            "identifier": "1558608567"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 635,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "averageRating": 4,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "3.5.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "previewLink": "http://books.google.co.id/books?id=eCj3cKC_3ikC&printsec=frontcover&hl=&source=gbs_api",
        "infoLink": "http://books.google.co.id/books?id=eCj3cKC_3ikC&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Automated_Planning.html?hl=&id=eCj3cKC_3ikC"
      },
      "saleInfo": {
        "country": "ID",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ID",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=eCj3cKC_3ikC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      }
    },
    {
      "kind": "books#volume",
      "id": "RiT0aAzeudkC",
      "etag": "gDiAkBGOvpE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/RiT0aAzeudkC",
      "volumeInfo": {
        "title": "Verbmobil: Foundations of Speech-to-Speech Translation",
        "authors": [
          "Wolfgang Wahlster"
        ],
        "publisher": "Springer Science & Business Media",
        "publishedDate": "2000-07-31",
        "description": "Verbmobil is the result of eight years of intensive research in a large speech-to-speech translation project, executed by a consortium comprising nineteen academic and four industrial partners. The system that was developed by more than 100 ...",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "3540677836"
          },
          {
            "type": "ISBN_13",
            "identifier": "9783540677833"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 700,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "2.3.8.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=RiT0aAzeudkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=RiT0aAzeudkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "previewLink": "http://books.google.co.id/books?id=RiT0aAzeudkC&printsec=frontcover&hl=&source=gbs_api",
        "infoLink": "http://books.google.co.id/books?id=RiT0aAzeudkC&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Verbmobil_Foundations_of_Speech_to_Speec.html?hl=&id=RiT0aAzeudkC"
      },
      "layerInfo": {
        "layers": [
          {
            "layerId": "geo",
            "volumeAnnotationsVersion": "11"
          }
        ]
      },
      "saleInfo": {
        "country": "ID",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ID",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.id/books/download/Verbmobil_Foundations_of_Speech_to_Speec-sample-epub.acsm?id=RiT0aAzeudkC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.id/books/download/Verbmobil_Foundations_of_Speech_to_Speec-sample-pdf.acsm?id=RiT0aAzeudkC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=RiT0aAzeudkC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      }
    },
    ...
  ]
```

&nbsp;

## 6. GET /books/search

Description: search for book

Request:

- query:

```json
{
  "q": "string"
}
```

_Response (200 - OK)_

```json
{
  "kind": "books#volumes",
  "totalItems": 2,
  "items": [
    {
      "kind": "books#volume",
      "id": "eCj3cKC_3ikC",
      "etag": "yT0DiOYDpkE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/eCj3cKC_3ikC",
      "volumeInfo": {
        "title": "Automated Planning",
        "subtitle": "Theory and Practice",
        "authors": ["Malik Ghallab", "Dana Nau", "Paolo Traverso"],
        "publisher": "Elsevier",
        "publishedDate": "2004-05-17",
        "description": "Publisher Description",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781558608566"
          },
          {
            "type": "ISBN_10",
            "identifier": "1558608567"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 635,
        "printType": "BOOK",
        "categories": ["Computers"],
        "averageRating": 4,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "3.5.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.id/books?id=eCj3cKC_3ikC&printsec=frontcover&dq=eCj3cKC_3ikC&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.id/books?id=eCj3cKC_3ikC&dq=eCj3cKC_3ikC&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Automated_Planning.html?hl=&id=eCj3cKC_3ikC"
      },
      "saleInfo": {
        "country": "ID",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ID",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=eCj3cKC_3ikC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The book goes well beyond classical planning, to include temporal planning, resource scheduling, planning under uncertainty, and modern techniques for plan generation, such as task decomposition, propositional satisfiability, constraint ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "srsyDwAAQBAJ",
      "etag": "13YudBj2Vr0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/srsyDwAAQBAJ",
      "volumeInfo": {
        "title": "Intelligent Virtual Agents",
        "subtitle": "17th International Conference, IVA 2017, Stockholm, Sweden, August 27-30, 2017, Proceedings",
        "authors": [
          "Jonas Beskow",
          "Christopher Peters",
          "Ginevra Castellano",
          "Carol O'Sullivan",
          "Iolanda Leite",
          "Stefan Kopp"
        ],
        "publisher": "Springer",
        "publishedDate": "2017-08-24",
        "description": "This book constitutes the proceedings of the 17th International Conference on Intelligent Virtual Agents, IVA 2017, held in Stockholm, Sweden, in August 2017. The 30 regular papers and 31 demo papers presented in this volume were carefully reviewed and selected from 78 submissions. The annual IVA conference represents the main interdisciplinary scientic forum for presenting research on modeling, developing, and evaluating intelligent virtual agents (IVAs) with a focus on communicative abilities and social behavior.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9783319674018"
          },
          {
            "type": "ISBN_10",
            "identifier": "3319674013"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 473,
        "printType": "BOOK",
        "categories": ["Computers"],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=srsyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=srsyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.id/books?id=srsyDwAAQBAJ&pg=PA62&dq=eCj3cKC_3ikC&hl=&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=srsyDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=srsyDwAAQBAJ"
      },
      "saleInfo": {
        "country": "ID",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 1155422,
          "currencyCode": "IDR"
        },
        "retailPrice": {
          "amount": 808795,
          "currencyCode": "IDR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=srsyDwAAQBAJ&rdid=book-srsyDwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1155422000000,
              "currencyCode": "IDR"
            },
            "retailPrice": {
              "amountInMicros": 808795000000,
              "currencyCode": "IDR"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "ID",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.id/books/download/Intelligent_Virtual_Agents-sample-pdf.acsm?id=srsyDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=srsyDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... Elsevier (2004), https://books.google.com.au/books?id=<b>eCj3cKC3ikC</b> 7. Hendler, J.A., Tate, A., Drummond, M.: AI planning: Systems and techniques. AI magazine 11(2), 61 (1990) 8. Maslow, A.H.: A theory of human motivation."
      }
    }
  ]
}
```

&nbsp;

## 7. GET /books/

Description: Get all books

Request:

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "totalPages": 4,
  "currentPage": 3,
  "totalItems": 20,
  "items": [
    {
      "kind": "books#volume",
      "id": "eCj3cKC_3ikC",
      "etag": "sJhUegNS5z0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/eCj3cKC_3ikC",
      "volumeInfo": {
        "title": "Automated Planning",
        "subtitle": "Theory and Practice",
        "authors": [
          "Malik Ghallab",
          "Dana Nau",
          "Paolo Traverso"
        ],
        "publisher": "Elsevier",
        "publishedDate": "2004-05-17",
        "description": "Publisher Description",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781558608566"
          },
          {
            "type": "ISBN_10",
            "identifier": "1558608567"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 635,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "averageRating": 4,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "3.5.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "previewLink": "http://books.google.co.id/books?id=eCj3cKC_3ikC&printsec=frontcover&hl=&source=gbs_api",
        "infoLink": "http://books.google.co.id/books?id=eCj3cKC_3ikC&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Automated_Planning.html?hl=&id=eCj3cKC_3ikC"
      },
      "saleInfo": {
        "country": "ID",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ID",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=eCj3cKC_3ikC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      }
    },
    {
      "kind": "books#volume",
      "id": "RiT0aAzeudkC",
      "etag": "gDiAkBGOvpE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/RiT0aAzeudkC",
      "volumeInfo": {
        "title": "Verbmobil: Foundations of Speech-to-Speech Translation",
        "authors": [
          "Wolfgang Wahlster"
        ],
        "publisher": "Springer Science & Business Media",
        "publishedDate": "2000-07-31",
        "description": "Verbmobil is the result of eight years of intensive research in a large speech-to-speech translation project, executed by a consortium comprising nineteen academic and four industrial partners. The system that was developed by more than 100 ...",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "3540677836"
          },
          {
            "type": "ISBN_13",
            "identifier": "9783540677833"
          }
        ],
        "readingModes": {
          "text": true,
          "image": true
        },
        "pageCount": 700,
        "printType": "BOOK",
        "categories": [
          "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "2.3.8.0.preview.3",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=RiT0aAzeudkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=RiT0aAzeudkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "previewLink": "http://books.google.co.id/books?id=RiT0aAzeudkC&printsec=frontcover&hl=&source=gbs_api",
        "infoLink": "http://books.google.co.id/books?id=RiT0aAzeudkC&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Verbmobil_Foundations_of_Speech_to_Speec.html?hl=&id=RiT0aAzeudkC"
      },
      "layerInfo": {
        "layers": [
          {
            "layerId": "geo",
            "volumeAnnotationsVersion": "11"
          }
        ]
      },
      "saleInfo": {
        "country": "ID",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ID",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.id/books/download/Verbmobil_Foundations_of_Speech_to_Speec-sample-epub.acsm?id=RiT0aAzeudkC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.id/books/download/Verbmobil_Foundations_of_Speech_to_Speec-sample-pdf.acsm?id=RiT0aAzeudkC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=RiT0aAzeudkC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      }
    },
    ...
  ]
```

&nbsp;

## 8. GET /books/search

Description: search book

Request:

- query:

```json
{
  "q": "string"
}
```

_Response (200 - OK)_

```json
{
  "kind": "books#volumes",
  "totalItems": 2,
  "items": [
    {
      "kind": "books#volume",
      "id": "eCj3cKC_3ikC",
      "etag": "yT0DiOYDpkE",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/eCj3cKC_3ikC",
      "volumeInfo": {
        "title": "Automated Planning",
        "subtitle": "Theory and Practice",
        "authors": ["Malik Ghallab", "Dana Nau", "Paolo Traverso"],
        "publisher": "Elsevier",
        "publishedDate": "2004-05-17",
        "description": "Publisher Description",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9781558608566"
          },
          {
            "type": "ISBN_10",
            "identifier": "1558608567"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 635,
        "printType": "BOOK",
        "categories": ["Computers"],
        "averageRating": 4,
        "ratingsCount": 3,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "3.5.1.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.id/books?id=eCj3cKC_3ikC&printsec=frontcover&dq=eCj3cKC_3ikC&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.id/books?id=eCj3cKC_3ikC&dq=eCj3cKC_3ikC&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Automated_Planning.html?hl=&id=eCj3cKC_3ikC"
      },
      "saleInfo": {
        "country": "ID",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ID",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=eCj3cKC_3ikC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "The book goes well beyond classical planning, to include temporal planning, resource scheduling, planning under uncertainty, and modern techniques for plan generation, such as task decomposition, propositional satisfiability, constraint ..."
      }
    },
    {
      "kind": "books#volume",
      "id": "srsyDwAAQBAJ",
      "etag": "13YudBj2Vr0",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/srsyDwAAQBAJ",
      "volumeInfo": {
        "title": "Intelligent Virtual Agents",
        "subtitle": "17th International Conference, IVA 2017, Stockholm, Sweden, August 27-30, 2017, Proceedings",
        "authors": [
          "Jonas Beskow",
          "Christopher Peters",
          "Ginevra Castellano",
          "Carol O'Sullivan",
          "Iolanda Leite",
          "Stefan Kopp"
        ],
        "publisher": "Springer",
        "publishedDate": "2017-08-24",
        "description": "This book constitutes the proceedings of the 17th International Conference on Intelligent Virtual Agents, IVA 2017, held in Stockholm, Sweden, in August 2017. The 30 regular papers and 31 demo papers presented in this volume were carefully reviewed and selected from 78 submissions. The annual IVA conference represents the main interdisciplinary scientic forum for presenting research on modeling, developing, and evaluating intelligent virtual agents (IVAs) with a focus on communicative abilities and social behavior.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9783319674018"
          },
          {
            "type": "ISBN_10",
            "identifier": "3319674013"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 473,
        "printType": "BOOK",
        "categories": ["Computers"],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=srsyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=srsyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.id/books?id=srsyDwAAQBAJ&pg=PA62&dq=eCj3cKC_3ikC&hl=&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=srsyDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=srsyDwAAQBAJ"
      },
      "saleInfo": {
        "country": "ID",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
          "amount": 1155422,
          "currencyCode": "IDR"
        },
        "retailPrice": {
          "amount": 808795,
          "currencyCode": "IDR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=srsyDwAAQBAJ&rdid=book-srsyDwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
          {
            "finskyOfferType": 1,
            "listPrice": {
              "amountInMicros": 1155422000000,
              "currencyCode": "IDR"
            },
            "retailPrice": {
              "amountInMicros": 808795000000,
              "currencyCode": "IDR"
            }
          }
        ]
      },
      "accessInfo": {
        "country": "ID",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": true,
          "acsTokenLink": "http://books.google.co.id/books/download/Intelligent_Virtual_Agents-sample-pdf.acsm?id=srsyDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=srsyDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "... Elsevier (2004), https://books.google.com.au/books?id=<b>eCj3cKC3ikC</b> 7. Hendler, J.A., Tate, A., Drummond, M.: AI planning: Systems and techniques. AI magazine 11(2), 61 (1990) 8. Maslow, A.H.: A theory of human motivation."
      }
    }
  ]
}
```

&nbsp;

## 5. GET /books/:id

Description: get book by id

Request:

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "kind": "books#volume",
  "id": "eCj3cKC_3ikC",
  "etag": "3nrw1AxYNgk",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/eCj3cKC_3ikC",
  "volumeInfo": {
    "title": "Automated Planning",
    "subtitle": "Theory and Practice",
    "authors": ["Malik Ghallab", "Dana Nau", "Paolo Traverso"],
    "publisher": "Elsevier",
    "publishedDate": "2004-05-03",
    "description": "<p>Automated planning technology now plays a significant role in a variety of demanding applications, ranging from controlling space vehicles and robots to playing the game of bridge. These real-world applications create new opportunities for synergy between theory and practice: observing what works well in practice leads to better theories of planning, and better theories lead to better performance of practical applications.</p> <p>Automated Planning mirrors this dialogue by offering a comprehensive, up-to-date resource on both the theory and practice of automated planning. The book goes well beyond classical planning, to include temporal planning, resource scheduling, planning under uncertainty, and modern techniques for plan generation, such as task decomposition, propositional satisfiability, constraint satisfaction, and model checking.</p> <p>The authors combine over 30 years experience in planning research and development to offer an invaluable text to researchers, professionals, and graduate students.</p> <br><br><ul> <li>Provides a thorough understanding of AI planning theory and practice, and how they relate to each other</li> <li>Covers all the contemporary topics of planning, as well as important practical applications of planning, such as model checking and game playing</li> <li>Presents case studies and applications in planning engineering, space, robotics, CAD/CAM, process control, emergency operations, and games</li> <li>Provides lecture notes, examples of programming assignments, pointers to downloadable planning systems and related information online</li></ul>",
    "industryIdentifiers": [
      {
        "type": "ISBN_10",
        "identifier": "1558608567"
      },
      {
        "type": "ISBN_13",
        "identifier": "9781558608566"
      }
    ],
    "readingModes": {
      "text": false,
      "image": true
    },
    "pageCount": 635,
    "printedPageCount": 665,
    "dimensions": {
      "height": "25.00 cm",
      "width": "19.10 cm",
      "thickness": "4.30 cm"
    },
    "printType": "BOOK",
    "categories": [
      "Computers / Artificial Intelligence / General",
      "Computers / Artificial Intelligence / Expert Systems",
      "Technology & Engineering / Robotics"
    ],
    "averageRating": 4,
    "ratingsCount": 3,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "3.5.1.0.preview.1",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71oygywPeYZbkMmEs1zBX2Pl3r82B81o4EbTsokMdgydim7DjLBb5XpJ0_Wn2EsG6qosJIqZ7rOLtJ40XY9n8mSrNQCM78lP-OLBNaUpBRa8rXwC2dwKCnR8P8NdqivBkmwlUGi&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72cQBHZU4FGtm7WMWQrsw6FuCcG38XXhgb2xoeGeUsNuO2iBqAOyLsVn2wOPIdapK_LrloegE4Ije9-LYubIEIt3JwJtG1_4KSH48Zn1r8ANTSxVDa86gKQ-NQ9fxli9jhXznJX&source=gbs_api",
      "small": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE71-qc9k7Lx40qyo5swCqbsoAw6GO7hAMkxJVs9rWsct3Lj2OXeARc0MveczzjpE0TtoL5JDB-nOuaJw9nK2sueApJnyG30PvvlO-Ta3MPj1cAmFJTrX7gmZgegODs_Dre4VeJq6&source=gbs_api",
      "medium": "http://books.google.com/books/content?id=eCj3cKC_3ikC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE72f9SJ2jthJZwyOmrAc5uDV5FcOF_jiMzaj45zoblKbCBLKdGXQf129Uaz905hgObDlo_AIk1DTQs08_U2_x7bNUUPMH3Q2OJshz3Vboc9teLVKBmrgvhKPZML0yrEarMaBgdE1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.co.id/books?id=eCj3cKC_3ikC&hl=&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=eCj3cKC_3ikC&source=gbs_api",
    "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eCj3cKC_3ikC"
  },
  "saleInfo": {
    "country": "ID",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "ID",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED",
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=eCj3cKC_3ikC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
  }
}
```

&nbsp;
