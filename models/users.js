const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


  const userSchema  = new Schema({
    username: String,
    image: {type: String, default: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fdesigndroide.com%2Fimages%2Fabstract-user-icon-4.svg&imgrefurl=https%3A%2F%2Fdesigndroide.com%2Fabstract-user-icon-4.html&docid=DCMihFceSZoxIM&tbnid=6lsv6_r3LY0TyM%3A&vet=10ahUKEwiPw4yN-aPcAhVkoFkKHRA9ABcQMwj6ASgQMBA..i&w=600&h=600&safe=active&client=ubuntu&bih=647&biw=650&q=default%20user%20icon&ved=0ahUKEwiPw4yN-aPcAhVkoFkKHRA9ABcQMwj6ASgQMBA&iact=mrc&uact=8'},
    groupsJoined:  [{
      name: String,
      image: String
    }],
    profile: [{
      theBio: String,
      theQuote: String,
      theFavPlace: String,
      coffee: String,
      photo: String
    }],
    password: String},
    {timestamps: true}
  );

  const User = mongoose.model('User', userSchema);

  module.exports = User;