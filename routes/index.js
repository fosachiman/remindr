var express = require('express');
var router = express.Router();
var regHelper = require('../register/reg-helper');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route to the register page
router.get('/register', (req, res, next) => {
  res.render('register')
});

// Post data from the register form to the database, both the user and user categories
router.post('/register', (req, res, next)  => {
  console.log(regHelper);
  console.log(regHelper.createUser);
  return regHelper.createUser(req, res)
  .then((response) => {
    console.log(response.dataValues.id);
  })
  .catch((err) => { res.status(500).json({ status: err }); });
});

module.exports = router;
