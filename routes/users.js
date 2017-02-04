var express = require('express');
var router = express.Router();
var models = require('../db/models/index'); // importing the model

var authHelpers = require('../auth/auth-helper');

//FIGURE OUT WHERE EACH OF THESE ARE GOING

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{
    // user:req.user.datavalues,
    // categories:req.usercategories.datavalues,
    // items:req.user.datavalues,
    title: 'Remindr',
})
})


/* GET users listing. */
router.get('/', authHelpers.loginRequired, function(req, res, next) {
  res.render('user/index', {
    user: req.user.dataValues
  });
});

// function getFavorites(req,res,next) {
//   models.sequelize.query('SELECT ""."title", "Category"."id", "Categories"."createdAt" FROM "Category" JOIN "Users" ON "UserCategories"."usedsId" = "Users"."id" JOIN "Users" ON "Categories"."userId" = "Users"."id" WHERE "Users"."id" = :id', {
//     replacements: { id: req.user.id }, /// replaces :id in the query
//     type: models.sequelize.QueryTypes.SELECT // don't need metadata in the response
//   }).then((UserCategories) => {
//     res.locals.UserCategories = UserCategories; // setting res.locals object to access in the response
//     return next(); // next function
//   });
// }

module.exports = router;
