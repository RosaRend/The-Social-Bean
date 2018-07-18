const express  = require('express');
const routes   = express.Router();

const Coffee         = require('../models/coffeeModel');

routes.get('/api/coffee' ,(req, res, next)=>{
  Coffee.find()
  .then((allCoffeeTypes)=>{
    res.json(allCoffeeTypes);
  })
  .catch((err)=>{
    next(err);
  });
});

// routes.get('/coffees', (req, res, next)=>{
//   res.render('')
// });


module.exports = routes;