const { Op, fn, col } = require("sequelize");
let { Inventory, History, Invoice } = require("../models");
class HistoryController {
  static async getAllHistory(req, res, next) {
    try {
      let UserId = req.user.id;
      let data = await History.findAll({
        where: {
          UserId,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async getReport(req, res, next) {
    try {
      let UserId = req.user.id;
      let totalExpense = await History.sum("expense", {
        where: {
          UserId,
        },
      });
      let totalRevenue = await History.sum("revenue", {
        where: {
          UserId,
        },
      });
      let grossProfit = Number(totalRevenue) - Number(totalExpense);
      console.log(totalExpense, totalRevenue, grossProfit);
      res.status(200).json({ totalExpense, totalRevenue, grossProfit });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
module.exports = HistoryController;
