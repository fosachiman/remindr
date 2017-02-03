const bcrypt = require('bcryptjs');
const models = require('../db/models/index');

function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  return models.Users.create({
    email: req.body.email,
    password: hash,
    name: req.body.name
  });
}


module.exports = {createUser};
