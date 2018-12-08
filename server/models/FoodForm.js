const mongoose = require("mongoose");
const foodFormSchema = new mongoose.Schema({
    name: String,
    calories: Number,
    required: true

});

const FoodForm = module.model("FoodForm", foodFormSchema);
module.exports = FoodForm;