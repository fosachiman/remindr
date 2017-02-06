var express = require('express');
var router = express.Router();
var regHelper = require('../register/reg-helper');
var models = require('../db/models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Remindr',
    slogan: 'Never waste an wasted moment'
  });
});

// Route to the register page
router.get('/register', (req, res, next) => {
  res.render('register')
});

// Post data from the register form to the database, both the user and categories
router.post('/register', regHelper.createCategories, (req, res, next)  => {
    regHelper.createUser(req, res)
    .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect('/users/' + req.user.id);
    });
  })
  .catch((err) => { res.status(500).json({ status: err }); });
});


module.exports = router;


//THIS IS HOW THINGS WILL BE JOINED >>>

// Project.belongsToMany(Task)
// Task.belongsToMany(Project)

// Project.create()...
// Task.create()...
// Task.create()...

// // save them... and then:
// project.setTasks([task1, task2]).then(function() {
//   // saved!
// })

// // ok, now they are saved... how do I get them later on?
// project.getTasks().then(function(associatedTasks) {
//   // associatedTasks is an array of tasks
// })

// // You can also pass filters to the getter method.
// // They are equal to the options you can pass to a usual finder method.
// project.getTasks({ where: 'id > 10' }).then(function(tasks) {
//   // tasks with an id greater than 10 :)
// })

// // You can also only retrieve certain fields of a associated object.
// project.getTasks({attributes: ['title']}).then(function(tasks) {
//     // retrieve tasks with the attributes "title" and "id"
// })
