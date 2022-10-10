const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const midtransClient = require('midtrans-client');

let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: 'SB-Mid-server-JbrhEhGAfzWMT_Gvh4f15Cti',
  clientKey: 'SB-Mid-client-bjCM0XNya_HPWhcp',
});

app.post('/pay', async (req, res, next) => {
  try {
    // prepare Snap API parameter ( refer to: https://snap-docs.midtrans.com ) minimum parameter example:
    let parameter = {
      transaction_details: {
        order_id: 'test-transaction-123',
        gross_amount: 200000,
      },
      credit_card: {
        secure: true,
      },
    };

    // create transaction
    const response = await snap.createTransaction(parameter);

    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    // next(err);
  }
});

app.listen(port, () => {
  console.log('i-i', port);
});
