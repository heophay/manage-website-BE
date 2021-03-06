const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Product = new Schema({
  name: String,
  description: String,
  quantity: Number,
  price: Number,
});

module.exports = mongoose.model('Product', Product)