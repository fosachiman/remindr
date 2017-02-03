var express = require('express');
var router = express.Router();
var regHelper = require('../register/reg-helper');
var register = require('../public/javascripts/register');
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
router.post('/register', (req, res, next)  => {
  regHelper.createUser(req, res)
  .then((response) => {
    console.log('HELLO');
    let categories = register.categories();
    console.log(categories);
    categories.forEach((category) => {
      models.Categories.create({
        user_id: response.dataValues.id,
        category: category.name
      });
    })
    console.log(response.dataValues.id);
    console.log(category.name)
  })
  .then(() => {
    res.redirect('/');
  })
  .catch((err) => { res.status(500).json({ status: err }); });
});

module.exports = router;
