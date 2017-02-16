var http=require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.write('hello','utf-8');
	res.end();
}).listen(3000);

console.log("server start port 3000");