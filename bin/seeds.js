const mongoose  = require('mongoose');
const Group     = require('../models/groupsModel');
const User      = require('../models/users');
const dbName = 'The-Social-Bean';
mongoose.connect(`mongodb://localhost/${dbName}`);

const groups = [
  {
    name: "Homemade Pot",
    members: `${User.length}`,
    description: "A place for all coffee beans."
  }
];

Group.create(groups)
.then((result)=>{
  mongoose.disconnect();
})
.catch((err)=>{
  console.log(err);
});