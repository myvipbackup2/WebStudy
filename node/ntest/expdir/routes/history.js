var express=require('express');
var router=express.Router();

router.get('/index',function(req,res,next){
	res.send('history success');
})


module.exports=router;