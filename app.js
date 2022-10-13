const cors = require('cors');
const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const routers = require('./routers/index')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/', routers)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})