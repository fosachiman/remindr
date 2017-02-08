const bcrypt = require('bcryptjs');

const models = require('../db/models/index');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
    console.log(req.user);
    req.user ? res.redirect('/users/' + req.user.id) : next();
}

function loginRequired(req, res, next) {
    if (!req.user) return res.status(401).json({ status: 'Please log in' });

    return next();
}

//registering stuff
//goes here

module.exports = {
    comparePass,
    loginRedirect,
    loginRequired
};
