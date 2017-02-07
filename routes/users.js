var express = require('express');
var router = express.Router();
var models = require('../db/models/index'); // importing the model
var users = require('../users/user-helpers')

/* GET users listing. */
router.get('/:id', users.validateUser, users.getUserName, users.getCategories, users.getItems, function(req, res, next) {
  res.render('users', {
    title: 'Remindr',
    uniqueUser:res.locals.user.dataValues.name,
    user: res.locals.user,
    categories: res.locals.categories,
    items: res.locals.items,
    pageID: users
  })
})

router.post('/:id/:category', users.deleteOldItems, users.submitItems, function(req, res, next) {
  res.redirect('/users/' + req.params.id)
})

module.exports = router;
