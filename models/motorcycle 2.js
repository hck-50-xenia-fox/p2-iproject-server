const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const motorcycleSchema = new Schema({
  brand: {
    type: String,
    required: [true, "Brand is required"],
  },
  model: {
    type: String,
    required: [true, "Model is required"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image Url is required"],
  },
  transmission: {
    type: String,
    required: [true, "Transmission is required"],
  },
  fuel: {
    type: String,
    required: [true, "Fuel is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  status: {
    type: String,
    default: 'Available'
  },
});

const Motorcycle = mongoose.model("motorcycles", motorcycleSchema)
module.exports = Motorcycle;
