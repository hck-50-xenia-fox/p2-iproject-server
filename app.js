if (process.env.NODE_ENV !== "production") require("dotenv").config();
const cors = require("cors");
const express = require("express");
const Controller = require("./controllers/controller");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Get success..");
});

app.get("/restaurant", Controller.getRestaurantData);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
