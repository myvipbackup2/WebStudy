//刺探三个域名 www.qq.com  www.baidu.com www.sohu.com
//get $.get  curl  http://qq.com/curl/name

var http=require('http');
//var dns=require('dns');
var urls=['www.qq.com','www.baidu.com','www.sohu.com'];

function fetchPage(url){
	var start=new Date();
	http.get({'host':url},function(){
		console.log('Got respone from : '+url);
		console.log('Request took '+(new Date()-start)+"ms");
	});
}

for(var i=0;i<urls.length;i++){
	fetchPage(urls[i]);
}