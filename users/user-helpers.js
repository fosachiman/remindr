const models = require('../db/models/index');

function validateUser(req, res, next) {
  let user = models.Users.findById(req.params.id);
  if (!user)
    return res.send('no user of that name');
  else
    next();
}

function getUserName(req, res, next) {
  models.Users.findOne({
      where: {
        id: req.params.id
      }
  }).then((user) => {
    res.locals.user = user;
    next();
  });
}

function getCategories(req, res, next) {
  console.log('RES USERS:' + res.locals.user.dataValues.email)
  models.Categories.findAll({
      where: {
        email: res.locals.user.dataValues.email
      }
  }).then((categories) => {
    console.log('CATEGORIES: ' + categories[0].dataValues.email)
    res.locals.categories = categories;
    next();
  });
}

function getItems(req, res, next) {
  models.Items.findAll({
    where: {
      user_id: req.params.id
    }
  }).then((items) => {
    res.locals.items = items;
  })
}


function updateItems(req, res, next) {

}

//create new item
//find item to add description and add description
//pull in items
//pull in friends
//add new friends
//pull in users via search
//


module.exports = {
  validateUser,
  getUserName,
  getCategories
};
