if (process.env.NODE_ENV !== "production") require("dotenv").config();
const cors = require("cors");
const express = require("express");
const Controller = require("./controllers/controller");
const app = express();
const port = process.env.PORT || 3000;
const errorHandler = require("./middlewares/errorhandler");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Get success..");
});

app.post("/signin", Controller.signIn);
app.post("/signup", Controller.signUp);
app.get("/restaurant", Controller.getRestaurantData);
app.get("/food", Controller.showAllItem);
app.post("/payment", Controller.addPaymentUser);
app.get("/payment", Controller.getPaymentUser);
app.get("/restaurant/:id", Controller.showTheRestaurant);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
