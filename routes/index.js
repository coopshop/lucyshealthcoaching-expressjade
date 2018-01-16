var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get(['/', '/index'], function(req, res, next) {
  res.render('index'/*, { title: 'Express' }*/);
});

/* GET About page */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET Recipes page */
router.get('/recipes', function(req, res, next) {
  res.render('recipes');
});

/* GET Work With Me page */
router.get('/work', function(req, res, next) {
  res.render('work');
});

module.exports = router;
