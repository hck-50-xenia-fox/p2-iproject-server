if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = 3000;
const router = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
