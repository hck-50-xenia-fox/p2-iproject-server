const { Op } = require("sequelize");
let { Inventory, History, Invoice } = require("../models");

class InventoryController {
  static async fetchAllInventory(req, res, next) {
    try {
      let UserId = req.user.id;
      let data = await Inventory.findAll({
        where: {
          UserId,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async buyInventory(req, res, next) {
    console.log(req.body);
    try {
      let UserId = req.user.id;
      let { productName, supplierName, quantity, pricePerItem } = req.body;
      let totalPrice = +pricePerItem * +quantity;
      let data = await Inventory.create({
        productName,
        supplierName,
        quantity,
        pricePerItem,
        UserId,
      });
      await History.create({
        expense: totalPrice,
        description: `Purchase ${data.productName} from ${data.supplierName}`,
        type: "Purchase",
        InventoryId: data.id,
        UserId,
      });
      let message = `Purchase ${data.productName} from ${data.supplierName} with item Id ${data.id} success record`;
      res.status(201).json({ message });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async EditPurchase(req, res, next) {
    console.log(req.body);
    try {
      let UserId = req.user.id;
      let id = req.params.id;
      let { productName, supplierName, quantity, pricePerItem } = req.body;
      let totalPrice = +pricePerItem * +quantity;
      let beforeEdit = await Inventory.findByPk(id);
      if (!beforeEdit) {
        throw { name: "Error not found" };
      }
      let checkSales = await Invoice.findAll({
        where: {
          [Op.and]: [{ UserId }, { InventoryId: id }],
        },
      });
      if (checkSales.length > 0) {
        throw {
          name: "You Cannot Edit because there's Sale with this stock item",
        };
      }
      let data = await Inventory.update(
        {
          productName,
          supplierName,
          quantity,
          pricePerItem,
          UserId,
        },
        {
          where: {
            id,
          },
        }
      );
      let afterEdit = await Inventory.findByPk(id);
      await History.update(
        {
          expense: totalPrice,
          description: `Purchase ${afterEdit.productName} from ${afterEdit.supplierName}[Revise]`,
          type: "Purchase",
          InventoryId: data.id,
          UserId,
        },
        {
          where: {
            [Op.and]: [{ UserId }, { InventoryId: id }],
          },
        }
      );
      let message = `Purchase ${afterEdit.productName} from ${afterEdit.supplierName} with item Id ${id} success revise`;
      res.status(201).json({ message });
    } catch (error) {
      next(error);
    }
  }
  static async DeletePurchase(req, res, next) {
    console.log(req.body);
    try {
      let UserId = req.user.id;
      let id = req.params.id;
      let beforeDelete = await Inventory.findByPk(id);
      if (!beforeDelete) {
        throw { name: "Error not found" };
      }
      let checkSales = await Invoice.findAll({
        where: {
          [Op.and]: [{ UserId }, { InventoryId: id }],
        },
      });
      if (checkSales.length > 0) {
        throw {
          name: "You Cannot Delete because there's Sale with this stock item",
        };
      }
      await Inventory.destroy({
        where: {
          id,
        },
      });
      await History.destroy({
        where: {
          [Op.and]: [{ UserId }, { InventoryId: id }],
        },
      });
      let message = `Purchase ${beforeDelete.productName} from ${beforeDelete.supplierName} with item Id ${id} success DELETE`;
      res.status(201).json({ message });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = InventoryController;
