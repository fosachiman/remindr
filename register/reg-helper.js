const bcrypt = require('bcryptjs');
const models = require('../db/models/index');


function createUser(req, res, next) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  // return
  models.Users.create({
    email: req.body.email,
    password: hash,
    name: req.body.name
  });
  next();
}

function createCategories(req, res, next) {
  let arr = Object.keys(req.body);
  let categories = arr.filter((category) => {
    return (category != "name" && category != "email" && category != "password");
  });
   categories.forEach((category) => {
   models.Categories.create({
      email: req.body.email,
      category: category
    });
  });
  next();
}

module.exports = {
  createUser,
  createCategories
};
