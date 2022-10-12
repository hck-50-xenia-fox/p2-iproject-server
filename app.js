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
// app.post('/login-facebook',UserController.facebookLogin)
// app.get('/crypto/live',CryptoController.livePrice)
app.get('/crypto', CryptoController.getCryptoData)
app.use(authUser)
app.get('/exchange',CryptoController.exchangeRate)
app.post('/premium',UserController.premiumUser)
app.patch('/update-premium',UserController.updateStatus)
app.get('/wishlist',UserController.userWishlisht)
app.post('/wishlist',UserController.newWishlist)
app.delete('/wishlist/:id',UserController.deleteWishlist)
app.get('/news', CryptoController.getCryptoNews)


app.use(errorHandlers)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})