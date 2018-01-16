var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(/\/(index)?/, function(req, res, next) {
  res.render('index'/*, { title: 'Express' }*/);
});

/* GET About page */
router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
