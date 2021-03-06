const express     = require('express');
const ensureLogin = require('connect-ensure-login');
const route       = express.Router();
const multer      = require('multer');


const uploadCloud = require('../config/cloudinary');
const Group       = require('../models/groupsModel');

route.get('/groups', ensureLogin.ensureLoggedIn(),  (req, res, next)=>{
  Group.find()
  .populate('barista')
  .then((listOfGroups)=>{
    res.render('group/groupPage', {listOfGroups});
  })
  .catch((err)=>{
    next(err);
  });
});

//enter the group
// route.get('', );
route.get('/group/:id/post', (req, res, next)=>{
  Group.findById(req.params.id)
  .then((FromDB)=>{
    console.log('Hello');
    res.render('group/addpost', {group: FromDB});
  });
});

route.post('/group/:id/post', uploadCloud.single('post'), (req, res, next)=>{
  const thePost = {
    posted: req.file.url
  };
  const id  = req.params.id;

  Group.findOneAndUpdate(id, {$push: {post: thePost}})
  .then((response)=>{
    res.redirect(`/group/${response._id}`);
  })
  .catch((err)=>[
    next(err)
  ]);
});

route.get('/groups/new', ensureLogin.ensureLoggedIn(),  (req, res, next)=>{
  Group.find()

  .then((aNewGroup)=>{
    console.log('Hello from line 23', aNewGroup);
    res.render('group/newGroup', {aNewGroup});
  })
  .catch((err)=>{
    next(err);
  });
});


route.post('/groups/create', uploadCloud.single('photo'), ensureLogin.ensureLoggedIn(), (req, res, next)=>{
  const newGroup = new Group({
    name: req.body.name,
    description: req.body.description
  });
  if(req.file){
    newGroup.image = req.file.url;

  }
  
  newGroup.save()
  .then((response)=>{
    console.log(newGroup);
    res.redirect(`/groups`);
  })
  .catch((err)=>{
    next(err);
  });
});

route.get('/group/:id/edit', (req, res, next) => {
  const groupId = req.params.id;
  Group.findById(groupId)
  .then( foundGroup => {
    res.render('group/editGroup', { group: foundGroup })
  } )
  .catch()
});


route.post('/group/:id/update', uploadCloud.single('photo'), (req, res, next)=>{
  // console.log('body is: ', req.body)
  Group.findByIdAndUpdate(req.params.id, {
    image: req.file.url,
    name: req.body.name,
    description: req.body.description
  })
  .then((theGroup)=>{
    // console.log('+++++++++++ ', theGroup)
    res.redirect('/groups');
  })
  .catch((err)=>{
    next('An error trying to update', err);
  });
});

route.post('/groups/:id/remove', (req, res, next)=>{
  Group.findByIdAndRemove(req.params.id)
  .then((reponse)=>{
    res.redirect('/groups');
  })
  .catch((err)=>{
    next(err);
  });
});



//uploadCloud.single('photo')

route.get('/group/:id', ensureLogin.ensureLoggedIn(), (req, res, next)=>{
  const id = req.params.id;

  // console.log(id)
  Group.findById(id)
  .populate('user')
  .then((theGroup)=>{
    res.render('group/oneGroup', {theGroup});
  })
  .catch((err)=>{
    next('Oh no! An error accurred!', err);
  });
});


module.exports = route; 