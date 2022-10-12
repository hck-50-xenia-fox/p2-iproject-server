if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 8888;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log("iProject is running on port", PORT);
});

module.exports = app;
