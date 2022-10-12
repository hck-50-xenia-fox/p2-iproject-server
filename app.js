const cors = require("cors");
const express = require("express");
const app = express();
const routes = require("./routes/index");

const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", routes);

app.listen(PORT, () => {
  console.log("terhubung di:", PORT);
});

module.exports = app;
