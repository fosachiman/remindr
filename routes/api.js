var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var itemData = require('../data/items.json');

router.get('/api', function(req, res) {
  res.json(itemData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res) {
  itemData.unshift(req.body);
  fs.writeFile('data/feedback.json', JSON.stringify(itemData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(itemData);
});


router.delete('/api/:id', function(req, res) {
  itemData.splice(req.params.id, 1);
  fs.writeFile('data/items.json', JSON.stringify(itemData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(itemData);
});



module.exports = router;
