


const WebSocket = require('ws');
const apiKey = 'a752024c1b5decb5bf9a21f52d121c285735e4ac0b8182fe7cf4ccdc4571cf22';
const webSocket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`);


const subMessage = {
  "action": "SubAdd",
  "subs": ["2~Binance~BTC~USDT"]
  }
  webSocket.onopen = (event) => {
    console.log("Connected to server");
    webSocket.send(JSON.stringify(subMessage))
    webSocket.on("message", (message) => {
      const messageObj = JSON.parse(message);
      const price = messageObj.PRICE;
      if (price) {
        console.log(`Price BTC/USDT: ${price}`);
      }
    });
  };




 