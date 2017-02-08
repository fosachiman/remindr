var express = require('express');
var router = express.Router();
var regHelper = require('../register/reg-helper');
var models = require('../db/models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Remindr',
        slogan: 'Never waste a wasted moment again'
    });
});

// Route to the register page
router.get('/register', (req, res, next) => {
    res.render('register')
});

// Post data from the register form to the database, both the user and categories
router.post('/register', regHelper.createCategories, (req, res, next) => {
    return regHelper.createUser(req, res)
        .then((user) => {
            req.login(user, (err) => {
                if (err) return next(err);
                res.redirect('/users/' + req.user.id);
            });
        })
        .catch((err) => { res.status(500).json({ status: err }); });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});


module.exports = router;
