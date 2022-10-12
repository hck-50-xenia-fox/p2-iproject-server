const express = require('express')
const cors = require('cors');
const CryptoController = require('./controllers/cryptoController');
const UserController = require('./controllers/userController');
const authUser = require('./middlewares/auth');
const errorHandlers = require('./middlewares/errorHandlers');
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.post('/register',UserController.userRegister)
app.post('/login',UserController.userLogin)
app.get('/crypto', CryptoController.getCryptoData)
app.get('/favorites',UserController.userFavorite)
app.post('/favorites',UserController.newWishlist)
app.delete('/favorites/:id',UserController.deleteWishlist)
app.use(authUser)
app.get('/news', CryptoController.getCryptoNews)
app.use(errorHandlers)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})