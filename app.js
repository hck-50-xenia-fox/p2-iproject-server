if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = 3000;
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const router = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket);

  console.log(`user ${socket.id} is connected`);

  socket.on("message", (data) => {
    console.log(data, "<< di dalem socket on");
    socket.broadcast.emit("message:received", data);
  });

  socket.on("disconnect", () => {
    console.log(`user ${socket.id} left`);
  });
});

server.listen(port, () => {
  console.log("Running on port, ", port);
});
