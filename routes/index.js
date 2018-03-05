var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Express',
    message: 'My message about handlebars',
    mainpage: true,
    cms : false
  });

});

router.get('/cms', (req,res) => {
  console.log('hit the cms route');
  res.render('cmsForm', {
    cms : true ,
    mainpage :false
  });
});

module.exports = router;
