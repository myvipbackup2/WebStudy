var express = require('express');
var router = express.Router();

// function checklogin(req,res,next){
// 	if(!req.session.user){
// 		res.redirect('/users/login');
// 	}

// 	next();
// }


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/users/index',checklogin);
// router.get('/users/index',function(){

// });





module.exports = router;
