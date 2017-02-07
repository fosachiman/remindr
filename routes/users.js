var express = require('express');
var router = express.Router();
var models = require('../db/models/index'); // importing the model
var users = require('../users/user-helpers')
var auth = require('../auth/auth-helpers')

/* GET users listing. */

router.get('/:id', users.validateUser, auth.loginRequired, users.getUserName, users.getCategories, users.getItems, function(req, res, next) {
    res.render('users', {
        title: 'Remindr',
        uniqueUser: res.locals.user.dataValues.name,
        user: res.locals.user,
        categories: res.locals.categories,
        items: res.locals.items
    })
})

router.post('/:id/:category', users.deleteOldItems, users.submitItems, function(req, res, next) {
    res.redirect('/users/' + req.params.id)
})

router.put('/:id/:category', function(req, res, next) {
    models.Items.update({
        desc: req.body.desc
    }, { where: { id: req.User.id } }).then(function() {
        res.redirect('/');
    });
})
module.exports = router;


//users/:id/edit/:item

//get the item id and pass it through the request
//a href = /req.params.userid/edit/ITEM ID
