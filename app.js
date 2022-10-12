const cors = require("cors");
const express = require("express");
const errorHandler = require("./middleware/handleErrors");
const router = require("./routes/index");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`beli bakso ${port}`);
});
