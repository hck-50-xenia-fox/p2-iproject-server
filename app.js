if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require('cors');
const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const routers = require('./routers/index')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', routers)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})