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

/* GET Contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* GET Health History pages */
router.get('/mens-health-history-form', function(req, res, next) {
  res.render('mens_health_history_form');
});
router.get('/womens-health-history-form', function(req, res, next) {
  res.render('womens_health_history_form');
});
router.get('/gender_neutral-health-history-form', function(req, res, next) {
  res.render('gender_neutral_health_history_form');
});

/* GET Media page */
router.get('/media', function(req, res, next) {
  res.render('media');
});

/* GET Praise page */
router.get('/praise', function(req, res, next) {
  res.render('praise');
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
