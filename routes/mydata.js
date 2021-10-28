var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sai Kishore Chowdam',fact: 'I love to watch movies' });
});

module.exports = router;
