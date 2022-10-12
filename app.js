const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes')
const port = 3000


app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))


app.use('/', router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})