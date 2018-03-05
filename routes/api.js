var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //mot using yet
});


router.get('/:id', function(req, res, next) {
  connect.query(`SELECT * FROM mainmodel WHERE model = "${req.params.id}"`, (err, result) =>{

    if (err) {
      throw err;

    }else{
      console.log(result);
      res.json(result);
    }
  });
});

router.delete('/:id', (req, res)=>{
  console.log('hit the delete route', req.params.id);
  connect.query(`DELETE FROM mainmodel WHERE model="${req.params.id}"`, (err,result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      res.json(result);
    }
  });
});

router.post('/', (req, res)=>{
  console.log('hit the post route');

  connect.query(`INSERT into mainmodel (id, model, modelName, pricing, modelDetails, imgPath) VALUES (NULL, "${req.body.model}", "${req.body.modelName}", "${req.body.pricing}", "${req.body.modelDetails}", "${req.body.imgPath}");`, (err, data)=>{
    if (err){
      throw (err);
    }else{
      res.json(data);
    }
  })

});

module.exports = router;
