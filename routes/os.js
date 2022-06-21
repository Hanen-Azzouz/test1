var express = require('express');
var router = express.Router();

var os = require("os");
/* GET os listing. */
router.get('/', function(req, res, next) {
  res.json({
"hostname":os.hostname(),
"type":os.type(),
"patform":os.platform()


  });
});
router.get('/cpus', function(req, res, next) {
    res.json (os.cpus()); 
    
  });
  router.get('/cpus/:id', function(req, res, next) {

    var identifiant=req.params.id;

    res.json (os.cpus()[identifiant]  ); 
    
  });

module.exports = router;
