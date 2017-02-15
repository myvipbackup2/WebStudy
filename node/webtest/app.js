var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
	//console.log(url.parse(req.url));
	//console.log(req.method);
	var requrl=url.parse(req.url).pathname;
	switch(requrl){
		case '/':
			resIndex(res);
			break;
		default :
			resError(res);
			break;
	}
}).listen(3000);

console.log('server start');

function resError(res){
	res.writeHead(404,{'Content-type':'text/plain'});
	res.end('page missing');
}

function resIndex(res){
	res.writeHead(200,{'Content-type':'text/html'});
	var realPath=__dirname+'/assets/'+url.parse("index.html").pathname;
	//console.log(realPath);
	var indexPage=fs.readFileSync(realPath,'utf-8');
	res.end(indexPage);
}