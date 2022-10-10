const midtransClient = require('midtrans-client');

// Create Core API instance
let core = new midtransClient.CoreApi({
  isProduction: false,
  serverKey: 'SB-Mid-server-JbrhEhGAfzWMT_Gvh4f15Cti',
  clientKey: 'SB-Mid-client-bjCM0XNya_HPWhcp',
});

let parameter = {
  payment_type: 'gopay',
  transaction_details: {
    gross_amount: 12145,
    order_id: 'test-transaction-54321',
  },
  gopay: {
    enable_callback: true, // optional
    callback_url: 'someapps://callback', // optional
  },
};

// charge transaction
core.charge(parameter).then(chargeResponse => {
  console.log('chargeResponse:');
  console.log(chargeResponse);
});
