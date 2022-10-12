// const prompts = require('prompts');
// const WebSocket = require('ws');

// const run = async () => {
//   const { symbol } = await prompts({
//     type: 'text',
//     name: 'symbol',
//     message: 'What symbol do you wanna track ?'
//   });

//   const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_1m`);

//   ws.on('message', async (data) => {
//     const incomingData = JSON.parse(data.toString());
//     if (incomingData.k) {
//       const isClosed = incomingData.k.x;
//       const symbolPrice = Number(incomingData.k.c);
//       console.log(`${symbol.toUpperCase()} : ${symbolPrice} -- closed = ${isClosed}`);
//     }
//   });
// }

// run();

// const websocket = new CoinbasePro.WebsocketClient(
//   ["BTC-EUR"],
//   "wss://ws-feed.pro.coinbase.com",
//   null, // <-- you need to put your API key in
//   {
//     channels: ['ticker']
//   }
// );
// websocket.on('message',data=>data.type==='ticker'&&xPrice=data.price&&console.log(data.price, data))


// const WebSocket = require('ws');
// const apiKey = 'a752024c1b5decb5bf9a21f52d121c285735e4ac0b8182fe7cf4ccdc4571cf22';
// const webSocket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`);

// const subMessage = {
//   "action": "SubAdd",
//   "subs": ["2~Binance~BTC~USDT"]
//   }
//   webSocket.onopen = (event) => {
//     console.log("Connected to server");
//     webSocket.send(JSON.stringify(subMessage))
//     webSocket.on("message", (message) => {
//       const messageObj = JSON.parse(message);
//       const price = messageObj.PRICE;
//       if (price) {
//         console.log(`Price BTC/USDT: ${price}`);
//       }
//     });
//   };

  // const WebSocket = require('ws');
  // const apiKey = process.env.CC_API;
  // const webSocket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`);
  // const subMessage = {
  // "action": "SubAdd",
  // // you can add more values to this array
  // "subs": ["2~Binance~BTC~USDT"]
  // }

 