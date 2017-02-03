const bcrypt = require('bcryptjs');

const models = require('../db/models/index');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
  req.user ? res.redirect('/user') : next();
}

function loginRequired(req, res, next) {
  !req.user ? res.redirect('/auth/login') : next();
}

//registering stuff
//goes here

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired
};
