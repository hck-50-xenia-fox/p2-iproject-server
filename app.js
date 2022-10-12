const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/index");

const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(
  "mongodb+srv://adibwafi:Aksesbebas123@sewamotor.38vyhzk.mongodb.net/SewaMotor?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/", routes);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(PORT, () => {
    console.log(`starting on port:`, PORT);
  });
});

module.exports = app;
