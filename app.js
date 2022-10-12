if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const router = require('./routes');

const { createServer } = require('http');
const { Server } = require('socket.io');
const errorHandler = require('./middlewares/error-handler');

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8080',
  },
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  console.log(username);

  if (!username) {
    return next(new Error('invalid username'));
  }
  socket.username = username;
  next();
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

httpServer.listen(3000, () => {
  console.log('i-i', port);
});

app.use(errorHandler);
