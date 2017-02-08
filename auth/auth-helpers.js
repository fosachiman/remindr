const bcrypt = require('bcryptjs');

const models = require('../db/models/index');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}
function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json(
    { status: 'You are already logged in' }
  );

  return next();
}

function loginRequired(req, res, next) {
  if (!req.user) return res.redirect('/auth/login')

  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired
};
