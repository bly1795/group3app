var express = require('express');
var router = express.Router();
var data = require('../data.json');
/* GET home page. */
router.get('/:name', function(req, res, next) {
  var nm = req.params.name;
  console.log(nm);

  var instIndex = data.instruments.findIndex(function(item,i) {
		return item.name === nm;
  });
  var instInfo = data.instruments[instIndex].moreInfo;

  data['altView'] = true;
  res.render('instPage', {
    'instName' : nm,
    'mInfo' : instInfo,
    'altView' : true
  });
});

module.exports = router;