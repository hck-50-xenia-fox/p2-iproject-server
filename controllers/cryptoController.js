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
      let { data } = await axios.get('https://crypto-news-live3.p.rapidapi.com/news',{
        headers: {
          'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.X_RAPID_API_HOST
        }
      })

      data.splice(20,data.length)
      res.status(200).json(data)
    } catch (error) {
      console.log(error)
      next(error)

    }
  }
  static async exchangeRate(req,res,next){
    try {
      const {amount} = req.query
      const {data} = await axios.get(`https://api.exchangerate.host/convert?from=IDR&to=USD&amount=${amount}&places=2`)
      res.status(200).json({result : data.result})
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CryptoController