var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('getting a weapon');
  res.sendfile('attack_tables/weapons.json' );
});

router.get('/:id', function(req, res) {
  var weapon_id = req.params.id;
  res.sendfile('attack_tables/' + weapon_id + '.json' );
});

module.exports = router;
