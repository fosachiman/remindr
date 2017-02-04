const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helper');

const options = {};

init();

passport.use(new LocalStrategy(options, (email, password, done) => {
  models.Users.findOne({
    where: {
      email: email
    }
  }).then((user) => {
    console.log('USER:' + user);
    if (!user) {
      return done(null, false);
    }
    if (!authHelpers.comparePass(password, user.dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, user.dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;
