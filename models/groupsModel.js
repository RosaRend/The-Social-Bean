const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Users    = ('../models/users')

const groupSchema = new Schema({
  barista: {type: Schema.Types.ObjectId, ref: 'User'},
  image: {type: String},
  name: String,
  // members: {type: Schema.Types.ObjectId, ref: 'Users'},
  description: String,
  posts: Object 
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;