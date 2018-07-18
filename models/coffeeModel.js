const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const coffeeSchema = new Schema({
  name: String,
  description: String,
  image: String,
  origin: String,
  served: String
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports  = Coffee;