var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/fanatics', function (req, res, next) {
  console.log("request received");
  fetch('https://jobs.lever.co/fanatics')
    .then(resp => resp.text()).then(body => console.log(body));
});

module.exports = router;
