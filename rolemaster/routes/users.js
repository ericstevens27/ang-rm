var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  console.log('getting user list');
  res.sendfile('attack_tables/users.json' );
});
module.exports = router;
