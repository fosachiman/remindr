const models = require('../db/models/index');
const sequelize = require('sequelize');

function validateUser(req, res, next) {
    let user = models.Users.findById(req.params.id);
    if (!user)
    //if the user requsted is not a user
        return res.send('no user of that name');
    else
    //if the user requested is a user in out database, then . . .
        next();
}

function getUserName(req, res, next) {
    models.Users.findOne({
        //SELECT * FROM Users
        where: {
            id: req.params.id
                //the id is the id of the user requested above
        }
    }).then((user) => {
        res.locals.user = user;
        //will the response that we get back equal to the variable 'user'
        next();
    });
}

function getCategories(req, res, next) {
    console.log('RES USERS:' + res.locals.user.dataValues.email)
    models.Categories.findAll({
        //SELECT * FROM Categories
        where: {
            email: res.locals.user.dataValues.email
                //the email equals the email of the user sent with the request object
        }
    }).then((categories) => {
        //console.log('CATEGORIES: ' + categories[0].dataValues.email)
        res.locals.categories = categories;
        //will the response that we get back equal to the variable 'categories'

        next();
    });
}

function getItems(req, res, next) {
    models.Items.findAll({
        //SELECT * FROM items
        where: {
            user_id: res.locals.user.dataValues.id
                //the user_id of the item equals the user_id of the user request object sent
        }
    }).then((items) => {
        console.log('items:' + items)
        res.locals.items = items;
        next();
    })
}

function deleteOldItems(req, res, next) {
    models.Items.destroy({
        //targets the Items table and sets a destroy command for the columns
        where: {
            user_id: req.params.id,
            category: req.params.category
                //the user_id of the item is the user_id of the requested User object AND
                //the category of the item is the category of the requested object
        }
    })
    next();
}

function submitItems(req, res, next) {
    console.log(req);
    let arr = req.body.item;
    // console.log('ARR:' + arr);
    // console.log('TYPE' + typeof(arr))
    // console.log('ID:' + req.params.id);
    // console.log('category:' + req.params.category)
    // console.log('suggestion:' + false)
    if (typeof(arr) == 'string' || typeof(arr) == 'undefined') {
        //if only one item is being sent, the datatype of it will be undefined. . . In that case . . .
        //. . . if the type of the submitted item is a string OR undefined, then
        models.Items.create({
            //target the Items table and
            user_id: req.params.id,
            name: req.body.item,
            category: req.params.category,
            suggestion: false
                //give it user_id of the user that made the request
                //give it a name of what the user defined in the field
                //give it a category of whatever category it was created in
                //set the suggestion state to false. It has not been suggested by another user
        })
    } else {
        arr.forEach((item, index) => {
            //if there are multiple items being sent at once, the datatype will be an array, so we have to loop through
            //the array, and forEach one do what we've done above for one item
            models.Items.create({
                user_id: req.params.id,
                name: item,
                category: req.params.category,
                suggestion: false
            })
        });
    }
    next();
}

//messing around with making a desc
function addDesc(req, res) {
    models.Items.update()

}
//pull in friends
//add new friends




module.exports = {
    validateUser,
    getUserName,
    getCategories,
    getItems,
    deleteOldItems,
    submitItems,
    addDesc
};
