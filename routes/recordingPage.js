var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */
router.get('/:name', function(req, res, next) {
  var nm = req.params.name;
  res.render('recordingPage',{
    "instName" : nm, 
    'altView' : true
  });
});

router.addRecording = function(req, res) {
  let num = Math.floor((Math.random() * 10) + 1);
  var d = new Date();
  var uniqueID = (d.getMilliseconds() * Math.random()).toString(36).substr(3);
  let recording = {
    'title' : req.query.title,
    'recUrl' : req.query.recURL,
    'date' : req.query.date,
    'length' : req.query.length,
    'id' : uniqueID
  };

  let instName = req.query.instName;

  console.log(recording);
  data.recordingsPlaceholder.push(recording);
  res.render('recordingPage', {
    'instName' : instName,
    'altView' : false
  });
}
module.exports = router;