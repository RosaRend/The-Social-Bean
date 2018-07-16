const mongoose  = require('mongoose');

const dbName = 'The-Social-Bean';
mongoose.connect(`mongodb://localhost/${dbName}`);

