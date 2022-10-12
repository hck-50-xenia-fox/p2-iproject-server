class Controller {
  static snapPayment(req, res, next) {
    let userId = req.user.id;

    const midtransClient = require('midtrans-client');
    // Create Snap API instance
    let snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: 'SB-Mid-server-WXo6rZyzGRJP9ga6U3HauDD4',
    });

    let parameter = {
      transaction_details: {
        order_id: 'Premium account Expense Tracker-10',
        gross_amount: 50000,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: `${req.user.username}`,
        email: `${req.user.email},`,
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

export default Controller