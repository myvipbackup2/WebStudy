var express=require('express');
var app=express();


app.get('/',function(req,res){
	res.send("baby so dirty");
});

app.listen(3000);
