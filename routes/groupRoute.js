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

route.get('/groups/:id', (req, res, next)=>{
  const id = req.params.id;

  Group.findById(id)
  .then((theGoup)=>{
    res.render('/groupPage', {theGoup});
  })
  .catch((err)=>{
    next(err);
  });
});


module.exports = route; 