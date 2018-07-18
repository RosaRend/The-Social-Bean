const express     = require('express');
// const bcrypt      = require('bcryptjs');
// const passport    = require('passport');
const ensureLogin = require('connect-ensure-login');
const route       = express.Router();

const Group       = require('../models/groupsModel');

route.get('/groups', ensureLogin.ensureLoggedIn(),  (req, res, next)=>{
  Group.find()

  .then((listOfGroups)=>{
    res.render('group/groupPage', {listOfGroups});
  })
  .catch((err)=>{
    next(err);
  });
});

route.get('/groups/new', ensureLogin.ensureLoggedIn(),  (req, res, next)=>{
  Group.find()

  .then((aNewGroup)=>{
    console.log(aNewGroup);
    res.render('group/newGroup', {aNewGroup});
  })
  .catch((err)=>{
    next(err);
  });
});

route.post('/groups/create', (req, res, next)=>{
  const newGroup = new Group({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description
  });
  newGroup.save()
  .then((response)=>{
    res.redirect('/groups');
  })
  .catch((err)=>{
    next(err);
  });
});

route.post('/group/:id/update', (req, res, next)=>{
  Group.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
  })
})

route.post('/groups/:id/remove', (req, res, next)=>{
  Group.findByIdAndRemove(req.params.id)
  .then((reponse)=>{
    res.redirect('/group/groupPage');
  })
  .catch((err)=>{
    next(err);
  });
});

route.get('/group/:id', (req, res, next)=>{
  const id = req.params.id;

  console.log(id)
  Group.findById(id)
  .then((theGroup)=>{
    res.render('group/oneGroup', {theGroup});
  })
  .catch((err)=>{
    next('Oh no! An error accurred!', err);
  });
});


module.exports = route; 