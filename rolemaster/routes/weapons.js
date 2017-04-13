var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  console.log('getting a weapon');
  res.sendFile(path.join(__dirname, '..', '..', 'rolemaster', 'attack_tables', 'weapons.json') );
});

router.get('/:id', function(req, res) {
  var weapon_id = req.params.id;
  res.sendFile(path.join(__dirname, '..', '..', 'rolemaster', 'attack_tables', weapon_id + '.json') );
});

module.exports = router;
