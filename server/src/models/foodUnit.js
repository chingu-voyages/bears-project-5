const mongoose = require("mongoose");
const FoodUnit = new mongoose.Schema({
  name: String,
  caloryPerUnit: Number
});
module.exports = mongoose.model("FoodUnit", FoodUnit);
