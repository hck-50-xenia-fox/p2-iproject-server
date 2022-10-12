const axios = require('axios');
// const WebSocket = require('ws');
// const apiKey = 'a752024c1b5decb5bf9a21f52d121c285735e4ac0b8182fe7cf4ccdc4571cf22';
class CryptoController {
  static async getCryptoData(req, res, next) {
    try {
      let { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=1h')
      data = data.map(el => {
        let obj = {
          name: el.name,
          image: el.image,
          current_price: el.current_price,
          symbol: el.symbol,
          volume: el.total_volume,
          price_change: el.price_change_percentage_24h.toFixed(2)
        }
        return obj
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async getCryptoNews(req, res, next) {
    try {
      let { data } = await axios.get('https://crypto-news-live3.p.rapidapi.com/news', {}, {
        headers: {
          'X-RapidAPI-Key': '5e35749576msh5531e2bec4c5d41p109125jsn367e2de7d0e3',
          'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
        }
      })
      res.status(200).json(data)
    } catch (error) {
      console.log(error)
      next(error)

    }
  }

  // static async livePrice(req, res, next) {
  //   try {
  //     const webSocket = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`);

  //     const subMessage = {
  //       "action": "SubAdd",
  //       "subs": ["2~Binance~BTC~USDT"]
  //     }
  //     webSocket.onopen = (event) => {
  //       console.log("Connected to server");
  //       webSocket.send(JSON.stringify(subMessage))
  //        webSocket.on("message", (message) => {
  //         const messageObj = JSON.parse(message);
  //         const price = messageObj.PRICE;
  //         if (price) {
  //           console.log(`Price BTC/USDT: ${price}`);
  //           res.status(200).json(price)
  //         }
  //       });
  //     };
  //   } catch (error) {

  //   }
  // }

}

module.exports = CryptoController