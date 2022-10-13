const midtransClient = require('midtrans-client');
const { User } = require('../models');

// prepare Snap API parameter ( refer to: https://snap-docs.midtrans.com ) minimum parameter example:
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER,
  clientKey: process.env.MIDTRANS_CLIENT,
});

class MidtransController {
  static async pay(req, res, next) {
    try {
      let parameter = {
        transaction_details: {
          order_id: `tez-transactios00-${~~(Math.random() * 10999)}`,
          gross_amount: 500000,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          fullName: `${req.user.fullName}`,
          email: `${req.user.email}`,
        },
      };

      // create transaction
      const response = await snap.createTransaction(parameter);
      await User.update({ status: 'Gold' }, { where: { id: req.user.id } });

      await res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MidtransController;
