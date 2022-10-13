class paymentController {
  static snapPayment(req, res, next) {
    let userId = req.user.id;
    const { price } = req.body;
    const midtransClient = require('midtrans-client');
    let snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: 'SB-Mid-server-WXo6rZyzGRJP9ga6U3HauDD4',
    });
    let code = Math.floor(Math.random() * 1000);
    let parameter = {
      transaction_details: {
        order_id: `Petshop-${code}`,
        gross_amount: price,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: req.user.username,
        email: req.user.email,
      },
    };
    snap
      .createTransaction(parameter)
      .then((transaction) => {
        let transactionToken = transaction.token;
        console.log('transactionToken:', transactionToken);
        res.status(201).json({ transactionToken: transactionToken });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = paymentController;
