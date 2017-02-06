var express = require('express');
var router = express.Router();
var models = require('../db/models/index'); // importing the model
var users = require('../users/user-helpers')

var authHelpers = require('../auth/auth-helper');


/* GET users listing. */
router.get('/:id', users.validateUser, users.getUserName, users.getCategories, users.getItems, function(req, res, next) {
  res.render('users', {
    title: res.locals.user.dataValues.name,
    categories: res.locals.categories,
    items: res.locals.items
  })
})

router.post('/:id', )


module.exports = router;
