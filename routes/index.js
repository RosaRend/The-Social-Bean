const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next)=>{
  // console.log("user info  ", req.user);
  res.render('index', {theUser: req.user});
  
});
module.exports = router;
