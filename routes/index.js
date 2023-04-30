var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/job-board-fetch', function (req, res, next) {
  console.log("request received");
  fetch('URL')
    .then(resp => resp.text()).then(body => res.send(body));
});


module.exports = router;
