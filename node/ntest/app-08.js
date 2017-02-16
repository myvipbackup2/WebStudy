var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
	/*
	if('/favicon.ico'==pathname){
		return;
	}*/
	//console.log(req.url);
	var requri=url.parse(req.url).pathname;
	//console.log(requri);
	switch(requri){
		case '/' :
			resIndex(res);
			break;
		case '/login':
			reslogin(res);
			break;
		default :
			reserror(res);
			break;
	}
}).listen(3000);

console.log('server start');

function reserror(res){
	res.writeHead(404,{'Content-type':'text/plain'});
	res.end('so sad');
}

function resIndex(res){
	res.writeHead(200,{'Content-type':'text/html'});
	var realPath=__dirname+'/'+url.parse('index.html').pathname;
	var data=fs.readFileSync(realPath,"utf-8");
	res.end(data);
}

function reslogin(res){
	res.writeHead(200,{'Content-type':'image/jpeg'});
	var realImage=__dirname+'/'+url.parse('123.jpg').pathname;
	var data=fs.readFileSync(realImage);
	res.end(data);
}