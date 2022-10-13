if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes')
// const io = require('socket.io')(server)
const port = process.env.PORT || 3000
require('dotenv').config()


app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))


app.use('/', router)

// let clientNo = 0

// io.on("connection", (socket) => {

//   clientNo++
//   socket.join(Math.round(clientNo/2))
//   socket.emit('serverMsg', roomNo)
//   socket.emit('serverToClient', "Hello, client!")

//   //Receiving a message from the client and putting it on terminal
//   socket.on('room created', clientRoom => {
//     io.to(clientRoom).emit('switchFromServer')
//     console.log(data)
//   })

//   socket.join("some room");
// });




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

