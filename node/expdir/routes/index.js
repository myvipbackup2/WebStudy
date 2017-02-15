var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var data=[
  	{'id':1,'name':'laoshan'},
  	{'id':2,'name':'laoxie'},
  ]	
  res.render('index', { title: data });
  //res.send('laoshan is so sad');
});

router.get('/login',function(req,res,next){
	res.render('login');
});
router.post('/login',function(req,res,next){
	var name=req.body.username;
	var pass=req.body.pass;

	console.log(name + " | " + pass);
})

module.exports=router;
