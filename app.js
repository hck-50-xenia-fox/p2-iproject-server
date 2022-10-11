const express = require('express')
const CryptoController = require('./controllers/cryptoController')
const app = express()
const port = 3000

app.get('/', CryptoController.getCryptoData)
app.get('/news', CryptoController.getCryptoNews)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})