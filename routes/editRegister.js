var express = require('express');
var router = express.Router();
var regHelper = require('../register/reg-helper');
var models = require('../db/models/index');

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
