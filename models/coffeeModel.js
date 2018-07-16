const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const coffeeSchema = new Schema({
  name: String,
  descrpition: String,
  image: String,
  typicalDrinkers: String
})

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports  = Coffee;