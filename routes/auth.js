const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helper');
const passport = require('../auth/local');

router.get('/login', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/login', {
        title: 'Remindr'
    });
});

router.post('/login', passport.authenticate('local', {
    title: 'Remindr',
    successRedirect: '/auth/login',
    failureRedirect: '/register',
    failureFlash: true
}));

module.exports = router;
