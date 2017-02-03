const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helper');
const passport = require('../auth/local');

router.get('/login', authHelpers.loginRedirect, (req,res) => {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/users',
  failureRedirect: '/auth/login',
  failureFlash: true
})
);

module.exports = router;
