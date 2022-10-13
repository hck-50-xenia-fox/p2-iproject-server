require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000
const routes = require("./routes/index")
const errorHandler = require('./middlewares/errorHandler')

const http = require('http')
const { Server } = require('socket.io')
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

io.on('connection', (socket) => {
  // console.log(socket)

  console.log(`user ${socket.id} is connected`)

  socket.on('message', data => {
    console.log(data, "<< di dalem socket on")
    socket.broadcast.emit('message:received', data)
  })

  socket.on('disconnect', () => {
    console.log(`user ${socket.id} left`)
  })
})

app.use(routes)

app.use(errorHandler)

server.listen(port, () => {
  console.log("MASIH DI LOCAL", port, "BRO!")
})

