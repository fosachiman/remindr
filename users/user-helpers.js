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
      user_id: res.locals.user.dataValues.id
    }
  }).then((items) => {
    console.log('items:' + items)
    res.locals.items = items;
    next();
  })
}

function deleteOldItems(req, res, next) {
  models.Items.destroy({
    where: {user_id: req.params.id}
  })
  next();
}

function submitItems(req, res, next) {
  console.log(req);
  let arr = Object.keys(req.body);
  console.log('ID:' + req.params.id);
  console.log('name:' + req.body.item)
  console.log('category:' + req.params.category)
  console.log('suggestion:' + false)

  arr.forEach((item, index) => {
    models.Items.create({
      user_id: req.params.id,
      name: item,
      category: req.params.category,
      suggestion: false
    })
  });
  next();
}

//  body: { item: [ 'a', 'ba', 'ca' ] },

// let arr = Object.keys(req.body);
//   let categories = arr.filter((category) => {
//     return (category != "name" && category != "email" && category != "password");
//   });
//    categories.forEach((category) => {
//    models.Categories.create({
//       email: req.body.email,
//       category: category
//     });
//   });
//   next();
// }

//find item to add description and add description
//pull in friends
//add new friends
//pull in users via search
//


//MANAGE THE BUTTON

//remember, you're submitting a form that passes the value
//each value is passed
//POST to /:userID/:category - these two values can be obtained from the params
//as well as the



module.exports = {
  validateUser,
  getUserName,
  getCategories,
  getItems,
  deleteOldItems,
  submitItems
};
