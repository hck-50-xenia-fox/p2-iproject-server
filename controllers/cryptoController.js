const axios = require('axios');

class CryptoController {
  static async getCryptoData(req, res) {
    try {
      let { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h')
      data = data.map(el => {
        let obj = {
          name: el.name,
          image: el.image,
          current_price: el.current_price,
          symbol: el.symbol,
          high_24h: el.high_24h,
          low_24h: el.low_24h
        }
        return obj
      })
      res.status(200).json(data)
    } catch (error) {

    }
  }
  static async getCryptoNews(req, res) {
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

    }
  }

}

module.exports = CryptoController