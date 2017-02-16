var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring=require('querystring');

http.createServer(function(req,res){
	//console.log(url.parse(req.url));

	
	var geturldata=url.parse(req.url).pathname;
	var objdata=querystring.parse(geturldata);
	console.log(objdata);
	//console.log(geturldata);
	//geturldata.split('&');
	/*
	var flag=1;
	for(var i=0;i<geturldata.length;i++){
		if(geturldata[i]=='&'){
			flag=3;
			var newArr=geturldata.split('&');
			for(var j=0;j<newArr.length;j++){
				//newArr[j].split('')
			}
		}else{
			flag=3;
			var arr=geturldata.split('=');
			//console.log(arr);
		}
	}

	if(flag==3){
		//var arr=geturldata.split('=');
		//console.log(arr);
	}else{
		console.log('no get data');
	}*/
}).listen(3000);

console.log('server start');
