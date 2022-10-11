
const cors = require('cors')
const express = require('express')
const errorHandler = require('./middlewares/ErrorHandler')
const app = express()
const PORT = 3000
const routes = require('./routes')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)
app.use(errorHandler)

// app.get('/', (req, res) => {
//     res.send('Uji Coba Hello World!')
//   })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})