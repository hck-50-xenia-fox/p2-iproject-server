const { Op } = require("sequelize");
const midtransClient = require("midtrans-client");
let easyinvoice = require("easyinvoice");
let { Inventory, History, Invoice, User } = require("../models");
const axios = require("axios");
const main = require("../helpers/nodemail");

class InvoiceController {
  static async getAllInvoice(req, res, next) {
    try {
      let UserId = req.user.id;
      let data = await Invoice.findAll({
        where: {
          UserId,
        },
        include: {
          model: Inventory,
        },
      });
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async getTargetInvoice(req, res, next) {
    try {
      let UserId = req.user.id;
      let id = req.params.id;
      let findInvoice = await Invoice.findByPk(id, {
        where: {
          UserId,
        },
      });
      if (!findInvoice) {
        throw { name: "Error not found" };
      }
      res.status(200).json(findInvoice);
    } catch (error) {
      next(error);
    }
  }
  static async addInvoice(req, res, next) {
    try {
      let UserId = req.user.id;
      let {
        customerName,
        customerAddress,
        InventoryId,
        quantity,
        priceToSale,
        rev,
        customerEmail,
        customerPhoneNumber,
      } = req.body;
      let totalPrice = +priceToSale * +quantity;
      let findInventory = await Inventory.findByPk(InventoryId);
      if (!findInventory) {
        throw { name: "Error not found" };
      }
      if (findInventory.quantity < quantity) {
        throw { name: "Stock is not Enough" };
      }
      let findRev = await Invoice.findAll({
        where: {
          [Op.and]: [{ rev }, { UserId }],
        },
      });
      if (findRev.length > 0) {
        throw {
          name: "Rev Has Already Used",
        };
      }
      let stockLeft = Number(findInventory.quantity) - Number(quantity);
      let data = await Invoice.create({
        customerName,
        customerAddress,
        UserId,
        InventoryId,
        quantity,
        priceToSale,
        rev,
        customerEmail,
        customerPhoneNumber,
      });
      await History.create({
        revenue: totalPrice,
        description: `Sale ${findInventory.productName} to ${data.customerName} `,
        type: "Sales",
        InventoryId: InventoryId,
        InvoiceId: data.id,
        UserId,
        rev,
      });
      await Inventory.update(
        {
          quantity: stockLeft,
        },
        {
          where: {
            id: InventoryId,
          },
        }
      );
      let message = `Sale ${findInventory.productName} to ${data.customerName} with success record`;
      res.status(201).json({ message });
    } catch (error) {
      next(error);
    }
  }
  static async deleteInvoice(req, res, next) {
    try {
      let UserId = req.user.id;
      let id = req.params.id;
      let findInvoice = await Invoice.findByPk(id);
      let findInventory = await Inventory.findByPk(findInvoice.InventoryId);
      let updateStock =
        Number(findInventory.quantity) + Number(findInvoice.quantity);
      if (!findInvoice) {
        throw { name: "Error not found" };
      }
      await Invoice.destroy({
        where: {
          [Op.and]: [{ UserId }, { id }, { rev: findInvoice.rev }],
        },
      });
      await History.destroy({
        where: {
          [Op.and]: [{ UserId }, { id }, { rev: findInvoice.rev }],
        },
      });
      await Inventory.update(
        {
          quantity: updateStock,
        },
        {
          where: {
            id: findInventory.id,
          },
        }
      );
      let message = `Sale ${findInventory.productName} to ${findInvoice.customerName} with Invoice Id ${id} success DELETE`;
      res.status(200).json({ message });
    } catch (error) {
      next(error);
    }
  }
  static async generateInvoice(req, res, next) {
    // console.log(req.params);
    try {
      let UserId = req.user.id;
      let id = req.params.id;
      let seller = await User.findByPk(UserId);
      let findInvoice = await Invoice.findByPk(id, {
        include: {
          model: Inventory,
        },
      });
      let updatedDate = findInvoice.updatedAt.toISOString().slice(0, 10);
      let productData = [
        {
          quantity: findInvoice.quantity,
          description: findInvoice.Inventory.productName,
          "tax-rate": 11,
          price: findInvoice.priceToSale,
        },
      ];
      let senderData = {
        company: seller.companyName,
        address: seller.address,
      };
      let clientData = {
        company: findInvoice.customerName,
        address: findInvoice.customerAddress,
        email: findInvoice.customerEmail,
        phoneNumber: findInvoice.customerPhoneNumber,
      };
      let informationData = {
        number: findInvoice.rev,
        date: updatedDate,
      };

      res
        .status(200)
        .json({ productData, senderData, clientData, informationData });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async generatePayment(req, res, next) {
    console.log(req.params);
    try {
      let UserId = req.user.id;
      let id = req.params.id;
      let randomNumber = Math.floor(Math.random() * 1000);
      let seller = await User.findByPk(UserId);
      let findInvoice = await Invoice.findByPk(id, {
        include: {
          model: Inventory,
        },
      });
      console.log(findInvoice);
      let grossAmount =
        Number(findInvoice.quantity) + Number(findInvoice.priceToSale);
      let data = await axios({
        // Below is the API URL endpoint
        url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Basic " +
            Buffer.from(process.env.SERVER_KEY_MIDTRANS).toString("base64"),
          // Above is API server key for the Midtrans account, encoded to base64
        },
        data:
          // Below is the HTTP request body in JSON
          {
            transaction_details: {
              order_id: findInvoice.rev + randomNumber,
              gross_amount: Number(grossAmount),
            },
            credit_card: {
              secure: true,
            },
            customer_details: {
              first_name: findInvoice.customerName,
              last_name: findInvoice.customerName,
              email: findInvoice.customerEmail,
              phone: findInvoice.customerPhoneNumber,
            },
          },
      });
      // console.log(data.data);
      main(findInvoice.customerEmail, "Payment", data.data.redirect_url);
      res.status(201).json(data.data);
      // .then((snapResponse) => {
      //   let snapToken = snapResponse.data.token;
      //   console.log("Retrieved snap token:", snapToken);
      //   // Pass the Snap Token to frontend, render the HTML page
      //   res.send(getMainHtmlPage(snapToken, handleMainRequest));
      // });
    } catch (error) {
      res.status(400).json(`Fail to call API w/ error ${error}`);
      console.log(error);
    }
  }
}
module.exports = InvoiceController;
