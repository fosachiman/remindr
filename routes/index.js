var express = require('express');
var router = express.Router();
var regHelper = require('../register/reg-helper');
var models = require('../db/models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Remindr',
    slogan: 'Never waste an wasted moment'
  });
});

// Route to the register page
router.get('/register', (req, res, next) => {
  res.render('register')
});

// Post data from the register form to the database, both the user and categories
router.post('/register', regHelper.createUser, regHelper.createCategories, (req, res, next)  => {
    res.redirect('/')
});


module.exports = router;
