const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const User = require('../models/users.js');


router.get('/newuser', (req, res) => {
    res.render('newuser.ejs', {
      currentUser: req.session.currentUser
    })
  });
  
  router.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser) => {
      console.log('user is created', createdUser)
      res.redirect('/messages/login') // REDIRECTS BACK TO LOGIN
    });
  });

  module.exports = users;

  router.get('/retreive-session', (req, res) => {
   if(req.session.anyProperty === "different string") {
     console.log("match")
     } else {
    cl("strings don't match")
    res.redirect('/')
    }
  });