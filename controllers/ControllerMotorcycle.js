const express = require("express");
const axios = require("axios");
const Motorcycle = require("../models/motorcycle");

const baseURLMotor = "https://motorcycle-specs-database.p.rapidapi.com/make";

class ControllerMotorcycle {
  static async getADV(req, res, next) {
    try {
      let data = await axios.get(`${baseURLMotor}/Honda/model/ADV150`, {
        headers: {
          "X-RapidAPI-Key":
            "8a6f25d790mshfceb2d850ae5493p125d64jsn500abf72ddcf",
          "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
        },
      });
      res.status(200).json({
        brand: data.data[0].articleCompleteInfo.makeName,
        model: data.data[0].articleCompleteInfo.modelName,
        imageUrl: data.data[0].articleImage.link,
        transmission: data.data[0].engineAndTransmission.gearboxName,
        fuel: data.data[0].physicalMeasuresAndCapacities.fuelCapacityName,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getPCX(req, res, next) {
    try {
      let data = await axios.get(`${baseURLMotor}/Honda/model/PCX150`, {
        headers: {
          "X-RapidAPI-Key":
            "8a6f25d790mshfceb2d850ae5493p125d64jsn500abf72ddcf",
          "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
        },
      });
      res.status(200).json({
        brand: data.data[0].articleCompleteInfo.makeName,
        model: data.data[0].articleCompleteInfo.modelName,
        imageUrl: data.data[0].articleImage.link,
        transmission: data.data[0].engineAndTransmission.gearboxName,
        fuel: data.data[0].physicalMeasuresAndCapacities.fuelCapacityName,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getScoopy(req, res, next) {
    try {
      let data = await axios.get(`${baseURLMotor}/Honda/model/Scoopy%20110`, {
        headers: {
          "X-RapidAPI-Key":
            "8a6f25d790mshfceb2d850ae5493p125d64jsn500abf72ddcf",
          "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
        },
      });
      res.status(200).json({
        brand: data.data[0].articleCompleteInfo.makeName,
        model: data.data[0].articleCompleteInfo.modelName,
        imageUrl: data.data[0].articleImage.link,
        transmission: data.data[0].engineAndTransmission.gearboxName,
        fuel: data.data[0].physicalMeasuresAndCapacities.fuelCapacityName,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getNMAX(req, res, next) {
    try {
      let data = await axios.get(`${baseURLMotor}/Yamaha/model/NMAX%20155`, {
        headers: {
          "X-RapidAPI-Key":
            "8a6f25d790mshfceb2d850ae5493p125d64jsn500abf72ddcf",
          "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
        },
      });
      res.status(200).json({
        brand: data.data[0].articleCompleteInfo.makeName,
        model: data.data[0].articleCompleteInfo.modelName,
        imageUrl: data.data[0].articleImage.link,
        transmission: data.data[0].engineAndTransmission.gearboxName,
        fuel: data.data[0].physicalMeasuresAndCapacities.fuelCapacityName,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getXMAX(req, res, next) {
    try {
      let data = await axios.get(`${baseURLMotor}/Yamaha/model/XMAX%20300`, {
        headers: {
          "X-RapidAPI-Key":
            "8a6f25d790mshfceb2d850ae5493p125d64jsn500abf72ddcf",
          "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
        },
      });
      res.status(200).json({
        brand: data.data[0].articleCompleteInfo.makeName,
        model: data.data[0].articleCompleteInfo.modelName,
        imageUrl: data.data[0].articleImage.link,
        transmission: data.data[0].engineAndTransmission.gearboxName,
        fuel: data.data[0].physicalMeasuresAndCapacities.fuelCapacityName,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getVespa(req, res, next) {
    try {
      let data = await axios.get(
        `${baseURLMotor}/Vespa/model/Primavera%20150`,
        {
          headers: {
            "X-RapidAPI-Key":
              "8a6f25d790mshfceb2d850ae5493p125d64jsn500abf72ddcf",
            "X-RapidAPI-Host": "motorcycle-specs-database.p.rapidapi.com",
          },
        }
      );
      res.status(200).json({
        brand: data.data[0].articleCompleteInfo.makeName,
        model: data.data[0].articleCompleteInfo.modelName,
        imageUrl: data.data[0].articleImage.link,
        transmission: data.data[0].engineAndTransmission.gearboxName,
        fuel: data.data[0].physicalMeasuresAndCapacities.fuelCapacityName,
      });
    } catch (err) {
      next(err);
    }
  }

  static async addMotorcycle(req, res, next) {
    try {
      let motorcycle = await Motorcycle.create({
        brand: req.body.brand,
        model: req.body.model,
        imageUrl: req.body.imageUrl,
        transmission: req.body.transmission,
        fuel: req.body.fuel,
        price: req.body.price,
      });
      res.status(201).json(motorcycle);
    } catch (err) {
      next(err);
    }
  }

  static async getMotorcycles(req, res, next) {
    try {
      let motorcycles = await Motorcycle.find();
      res.status(200).json(motorcycles);
    } catch (err) {
      next(err);
    }
  }

  static async updateStatus(req, res, next) {
    try {
      let { id } = req.params;
      let findMotorcycle = await Motorcycle.findOne({ _id: id });
      if(!findMotorcycle) {
        throw { name: 'DATA_NOT_FOUND' }
      }
      await findMotorcycle.updateOne({ status: "Available" });
      res.status(200).json({
        message: `Motorcycle rented successfully`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async getMotorcycleById(req, res, next) {
    try {
      let { id } = req.params
      let findMotorcycle = await Motorcycle.findOne({ _id: id })
      if(!findMotorcycle) {
        throw { name: 'DATA_NOT_FOUND' }
      }
      res.status(200).json(findMotorcycle)
    }
    catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerMotorcycle;
