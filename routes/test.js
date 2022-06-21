var express = require('express');
var router = express.Router();

/* GET test listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//redirection vers une page twig
router.get('/create/', function(req, res, next) {
  res.render('test.twig');
});
module.exports = router;
