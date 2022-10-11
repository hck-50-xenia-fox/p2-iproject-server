
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 3000


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Uji Coba Hello World!')
  })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})