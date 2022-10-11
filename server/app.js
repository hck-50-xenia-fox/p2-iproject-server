const express = require("express");
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router)
app.use(errorHandler)

app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}!`)
);
