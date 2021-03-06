const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


  const userSchema  = new Schema({
    username: String,
    image: {type: String, default: 'https://designdroide.com/images/abstract-user-icon-4.svg'},
    groupsJoined:  [{
      name: String,
      image: String,
      path: String
    }],
    // profile: [{
    //   theBio: String,
    //   theQuote: String,
    //   theFavPlace: String,
    //   coffee: String,
    //   photo: String, 
    //   path: String
    // }],
    profile: Object,
    posts: Object,
    password: String},
    {timestamps: true}
  );

  const User = mongoose.model('User', userSchema);

  module.exports = User;