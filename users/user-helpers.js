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

// function organizeInfo(req, res, next) {
//   // models[res.locals.userInfo].findAll({
//   //   attributes: 'name'
//   // }).then((categories) => {
//   //   console.log(models[res.locals.userInfo]);
//   // });
//   // next();
// }

// function combineUserInfo(req, res, next) {
//   models.sequelize.query(`SELECT "Users"."name", "Items"."name", "Items"."desc", "Items"."category", "Items"."suggestion", "Friends"."user_1", "Friends"."user_2" FROM "Users" JOIN "Categories" ON "Users"."email" = "Categories"."email" JOIN "Items" ON "Users"."id" = "Items"."user_id" JOIN "Friends" ON "Users"."id" = "Friends"."user_1" WHERE "Users"."id" = ${req.params.id}`, {
//     type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
//   }).then((userInfo) => {
//     console.log(userInfo);

//     res.locals.userInfo = userInfo; // setting res.locals object to access in the response
//     console.log(res.locals.userInfo);
//     return next(); // next function
//   });
// }

module.exports = {
  validateUser,
  getUserName,
  getCategories
};
