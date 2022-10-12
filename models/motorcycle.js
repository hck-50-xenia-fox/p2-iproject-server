const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const motorcycleSchema = mongoose.model(
  "Motorcycles",
  new Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required']
    },
    model: {
        type: String,
        required: [true, 'Model is required']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image Url is required']
    },
    transmission: {
        type: String,
        required: [true, 'Transmission is required']
    },
    fuel: {
        type: String,
        required: [true, 'Fuel is required']
    }
  })
);

module.exports = motorcycleSchema;