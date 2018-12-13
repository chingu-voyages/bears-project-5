//mongoose schema for food form
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: String,
    kcal: Number
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;