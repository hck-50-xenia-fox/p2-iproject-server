if (process.env.NODE_ENV !== "production") require("dotenv").config();
const cors = require("cors");
const express = require("express");
const errorHandler = require("./middleware/error-handler");
const router = require("./routes");
const app = express();
const port = process.env.PORT || 3000;
// const { TwitterApi } = require("twitter-api-v2");

// const client = new TwitterApi({
//   appKey: "Inma4F5BfdSn3Sv6nnT4iCWGh",
//   appSecret: "9HetkRbQjLXap2g3skEzXW0Vvb0rJaHNMODsZZV3Cs1gofYd8o",
//   accessToken: "1579857598836527106-3PUzrdWxedf6Os3Q5bhspoco3iWq66",
//   accessSecret: "FlxDB99cM1k5Rc7wHTjdqnn4Prfj83SPfWlLbVfX5IIbn",
// });

// client.v2.singleTweet('1455477974489251841', {
//   'tweet.fields': [
//       'organic_metrics',
//    ],
// }).then((val) => {
//   console.log(val)
// }).catch((err) => {
//   console.log(err)
// })

const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use(errorHandler);

server.listen(port, () => {
  console.log(`Twittir listening to port ${port}`);
});
