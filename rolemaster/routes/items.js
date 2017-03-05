var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  console.log('getting item list');
  res.sendfile('attack_tables/items.json' );
});
module.exports = router;
