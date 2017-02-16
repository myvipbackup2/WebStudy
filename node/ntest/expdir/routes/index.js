var express = require('express');
var router = express.Router();
var user=require('../controllers/user.js');

/* GET home page. */

//写router代码 向控制器下的方法跳
router.get('/login',user.login);
router.post('/login',user.dologin);
router.post('/xxlogin',user.xxlogin);


/*
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
});

router.get('/users/xx/login',function(req,res,next){
  res.send('router success');
});*/




module.exports=router;
