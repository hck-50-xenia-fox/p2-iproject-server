const axios = require('axios');
const baseUrl = 'https://www.googleapis.com/books/v1';

class BookController {
  static async getBook(req, res, next) {
    try {
      const { start } = req.query;
      const { data } = await axios({
        methods: 'get',
        url: `${baseUrl}/users/111815788291054011027/bookshelves/0/volumes?startIndex=${
          start ? start : 0
        }&maxResults=6`,
        params: {
          key: process.env.GOOGLE_API_KEY,
        },
      });

      res.status(200).json({
        totalPages: Math.ceil(data.totalItems / 6),
        currentPage: Math.ceil((start - 1) / 6) + 1,
        totalItems: data.totalItems,
        items: data.items,
      });
    } catch (err) {
      next(err);
    }
  }
  static async searchBook(req, res, next) {
    try {
      const { q } = req.query;
      const { data } = await axios({
        methods: 'get',
        url: `${baseUrl}/volumes`,
        params: {
          key: process.env.GOOGLE_API_KEY,
          q,
          maxResults: 10,
        },
      });

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async bookById(req, res, next) {
    try {
      const { id } = req.params;
      const { data } = await axios({
        methods: 'get',
        url: `${baseUrl}/volumes/${id}`,
        params: {
          key: process.env.GOOGLE_API_KEY,
        },
      });

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = BookController;
