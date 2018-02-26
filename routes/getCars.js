var express = require('express');
var connect = require('../utils/sqlConnect'); //db connection stuff
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  connect.query("SELECT * FROM mainmodel", (err, result)=> {
    if (err){
      throw err;
    }else {
      console.log(result);
      res.render('cars',
      { title: 'Minis are awesome',
       message: 'a selection of cars',
       carData : result
     });
    }
  });

});

module.exports = router;
