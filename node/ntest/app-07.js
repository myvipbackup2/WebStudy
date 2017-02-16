var http=require('http');
var fs=require('fs');
var url=require('url');


http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	//console.log(__dirname);
	//1:把index.html读到内存  先拼路径 再读取
	//console.log(url.parse('index.html'));
	var readPath=__dirname+"/"+url.parse('index.html').pathname;
	var data=fs.readFileSync(readPath,'utf-8');

	res.end(data);
}).listen(3000);

console.log("server start");


