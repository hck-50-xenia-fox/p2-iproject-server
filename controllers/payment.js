const axios = require("axios");

class Payment {
  static async paymentUser(req, res, next) {
    try {
      const { id: movieId } = req.params;
      // const { id: userId } = req.user;
      const { price } = req.body;
      // console.log(movieId, "===== dari controller");
      // console.log(userId, "===== id user dari controller");
      const orderId = Math.floor(Math.random() * 10000000000000);
      const response = await axios({
        url: "https://api.sandbox.midtrans.com/v2/charge",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Basic U0ItTWlkLXNlcnZlci1tdmI1d05fdnQ5M2czTTYzcy0yOEJWMTA6",
        },
        data: {
          payment_type: "gopay",
          transaction_details: {
            order_id: orderId,
            gross_amount: price,
          },
          gopay: {
            enable_callback: true,
            // callback_url: `http://localhost:3000/rents?UserId=${userId}&MovieId=${movieId}`,
            callback_url: `https://montal.web.app/payment/finish?MovieId=${movieId}`,
            recurring: false,
          },
        },
      });
      console.log(response.data, "===== response controller");
      console.log(response.data.actions[1]);
      res.status(201).json({
        "Order Number": response.data.order_id,
        Pay: response.data.actions[1].url,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Payment;
