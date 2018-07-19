const express     = require('express');
const bcrypt      = require('bcryptjs');
const passport    = require('passport');
const userRoute   = express.Router();
const ensureLogin = require('connect-ensure-login');
const multer      = require('multer');


const uploadCloud = require('../config/cloudinary');
const User        = require('../models/users');
const Coffee      = require('../models/coffeeModel')

userRoute.get('/signup', (req, res, next)=>{
  
  res.render('user/signupPage');
});

userRoute.post('/signup', (req, res, next)=>{
  const thePassword = req.body.thePassword;
  const theUsername = req.body.theUsername;
  
  if(thePassword === "" || theUsername === ""){
    res.render('user/signupPage', {errorMessage: "Please fill in all fields to gain access."});
    return;
  }
  
  User.findOne({'username': theUsername})
  .then((responseFromDB)=>{
    if(responseFromDB !== null){
      res.render("user/signupPage", {errorMessage: `Sorry, the username ${theUsername} has already been taken. Please try another.`});
      return;
    }
    
    const salt          = bcrypt.genSaltSync(10);
    const hashedPasswod = bcrypt.hashSync(thePassword, salt);
    
    User.create({username: theUsername, password: hashedPasswod})
    .then((response)=>{
      res.redirect('/');
    })
    .catch((err)=>{
      next(err);
    });
  });
});


userRoute.get('/login', (req, res, next)=>{
  res.render('user/loginPage', {"message": req.flash("error")});
});

userRoute.post("/login", passport.authenticate("local", {
  successRedirect: "/", 
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

// userRoute.get('/user/Page', (req, res, next)=>{
//   // res.render('user/userPersonalPage');
//   // userRoute.get('/user/Page', (req, res, next)=>{
//     res.render("user/userPersonalPage", { User: req.user });
// });

userRoute.get('/user/profileInfo/:id', ensureLogin.ensureLoggedIn() ,(req, res, next)=>{

  Coffee.find()
  .then((allCoffeeTypes)=>{
    res.render('user/profileInfo', {allCoffeeTypes})
  })
  .catch((err)=>{
    next(err);
  });
});
//image: req.file.url

userRoute.post('/user/profileInfo/:id', uploadCloud.single('photo'), (req, res, next)=>{
  const userBio = req.body;
  const id = req.user;

  console.log('From line 82, the id ', id)
  User.findByIdAndUpdate(id, {$push: {profile: userBio}
  .then((response)=>{
    res.redirect(`user/userPersonalPage`);
  })
  .catch((err)=>{
    next(err);
  })
  });
});

userRoute.get('/user/page/:id', ensureLogin.ensureLoggedIn(), (req, res, next)=>{
  const id = req.params.id;
  User.findById(id)
  .then((theUser)=>{
    console.log(req.params.id);
    res.render('user/userPersonalPage', {theUser});
  })
  .catch((err)=>{
    console.log('can get user from data');
    next('Oh no check your code. Line 55.', err);
  });
});

userRoute.get("/logout", (req, res, next)=>{
  req.logout();
  res.redirect("/");
});

module.exports = userRoute;