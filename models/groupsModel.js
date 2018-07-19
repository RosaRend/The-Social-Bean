const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const User        = require('../models/users');

const groupSchema = new Schema({
  image: {type: String, defult: "../public/images/groupDefault.jpeg"},
  name: String,
  members: [{
    num: Number,

  }],
  description: String 
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;