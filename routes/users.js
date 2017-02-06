var express = require('express');
var router = express.Router();
var models = require('../db/models/index'); // importing the model
var users = require('../users/user-helpers')

var authHelpers = require('../auth/auth-helper');


/* GET users listing. */
router.get('/:id', users.validateUser, users.getUserName, users.getCategories, function(req, res, next) {
  res.render('users',{
    title: res.locals.user.dataValues.name,
    categories: res.locals.categories
  })
})

module.exports = router;
