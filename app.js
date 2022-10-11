const express = require('express')
const cors = require('cors');
const CryptoController = require('./controllers/cryptoController');
const UserController = require('./controllers/userController');
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.post('/register',UserController.userRegister)
app.post('/login',UserController.userLogin)

app.get('/', CryptoController.getCryptoData)
app.get('/news', CryptoController.getCryptoNews)


app.use((err, req, res, next) => {
  console.log(err)
  let code = 500
  let message = "Internal Server Error"
  if (err.name === "SequelizeValidationError") {
    code = 400
    message = err.errors[0].message
  } else if (err.name === "SequelizeUniqueConstraintError") {
    code = 400
    message = "Email must be unique"
  } else if (err.name === "Email is empty") {
    code = 400
    message = "Email is required"
  } else if (err.name === "Password is empty") {
    code = 400
    message = "Password is required"
  } else if (err.name === "Invalid") {
    code = 401
    message = "Invalid email/password"
  } else if (err.name === "JsonWebTokenError") {
    code = 401
    message = "Invalid token"
  }

  res.status(code).json({ message })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})