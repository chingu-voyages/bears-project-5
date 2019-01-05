const mongoose = require("mongoose");
const userFood = new mongoose.Schema({
  userId: mongoose.Schema.ObjectId,
  foodId: mongoose.Schema.ObjectId,
  unitId: mongoose.Schema.ObjectId,
  count: Number,
  date: Date
});

module.exports = mongoose.model("UserFood", userFood);
