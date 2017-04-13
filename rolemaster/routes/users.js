var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  console.log('getting user list');
  res.sendFile(path.join(__dirname, '..', '..', 'rolemaster', 'attack_tables', 'users.json'));
});

module.exports = router;
