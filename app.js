if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
const cors = require('cors')
const express = require('express')
const errorHandler = require('./middlewares/ErrorHandler')
const app = express()
const PORT = process.env.NODE_ENV.PORT || 3000
const routes = require('./routes')
const {Server} =  require("socket.io")
const http = require('http')
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(routes)
app.use(errorHandler)

// app.get('/', (req, res) => {
//     res.send('Uji Coba Hello World!')
//   })

io.on('connection', (socket) => {
    console.log(`user ${socket.id} enter the chatroom`)
    socket.on('message', data => {
        socket.broadcast.emit('message:received', data)
    })
    socket.on('disconnect', () => {
        console.log(`user ${socket.id} left the chatroom`)
    })
})

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})