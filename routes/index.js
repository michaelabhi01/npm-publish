var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("inside /");
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  console.log("inside /test");
  res.render('index', { title: 'TEST' });
});
module.exports = router;
