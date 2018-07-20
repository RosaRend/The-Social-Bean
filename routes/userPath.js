const express     = require('express');
const bcrypt      = require('bcryptjs');
const passport    = require('passport');
const userRoute   = express.Router();
const ensureLogin = require('connect-ensure-login');
const multer      = require('multer');


const uploadCloud = require('../config/cloudinary');
const User        = require('../models/users');
const Coffee      = require('../models/coffeeModel');
// const 
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
    User.findById(req.user)
    .then((userFromDB) => {
      var data = {
        allCoffeeTypes: allCoffeeTypes,
        theUser: userFromDB
      };
      res.render('user/profileInfo', data);
    });
  })
  .catch((err)=>{
    next(err);
  });
});
// image: req.file.url
userRoute.post('/user/page/:id/post', uploadCloud.single('aPost'), (req, res, next)=>{
  const onePost = {
    post: req.file.url
  };
  const id = req.params.id;

  console.log("That one post", onePost);

  User.findByIdAndUpdate(id, {$push: {posts: onePost}})
  .then((response)=>{
    console.log(response)
    res.redirect(`/user/page/${response._id}`)
  })
  .catch((err)=>{
    next(err)
  });
});
userRoute.get('/user/page/:id/post', (req, res, next)=>{

  User.findById(req.params.id)
  .then((userFromDB) => {
    console.log("current user on user page load ####################### ", userFromDB);
    res.render('user/postToPage', {theUser: userFromDB});
  })
})


userRoute.post('/user/profileInfo/:id', uploadCloud.single('photo'),  (req, res, next)=>{
  
  const userBio = {
    bio:  req.body.theBio,
    quote: req.body.theQuote,
    fav: req.body.theFavPlace,
    pic: req.file.url,
    coffee: req.body.coffee
  };
  const id = req.params.id;

  console.log('From line 92, the id ', userBio);

  // User.findByIdAndUpdate(id, {$push: {profile: userBio}})
  User.findById(id)
  .then((response)=>{
    console.log("response after updating info ===================== ", response);
    response.set({profile: userBio});
    return response.save()
    .then(() => {

      res.redirect(`/user/page/${response._id}`);
    })
  })
  .catch((err)=>{
    next(err);
  })
  // });
});

userRoute.get('/user/page/:id', ensureLogin.ensureLoggedIn(), (req, res, next)=>{
  const id = req.params.id;
  User.findById(id)
  .then((theUser)=>{
    console.log("user info on route to personal page >>>>>>>>>>>>>>>>>>>>>> ", theUser)
    if(theUser.profile){

      Coffee.findById(theUser.profile.coffee)
      .then((coffeeFromDB) => {
        var data = {
          theUser: theUser,
          coffee: coffeeFromDB
        };
        console.log("coffee from db ::::::::::::::::::::::: ", coffeeFromDB)
        res.render('user/userPersonalPage', data);
      });
    } else {
      res.render('user/userPersonalPage', {theUser});
    }
  })
  .catch((err)=>{
    console.log('can get user from data');
    next('Oh no check your code. Line 112.', err);
  });
});

userRoute.get("/logout", (req, res, next)=>{
  req.logout();
  res.redirect("/");
});

module.exports = userRoute;