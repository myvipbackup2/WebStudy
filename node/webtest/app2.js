var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring=require('querystring');
//var events=require('events').EventEmitter;

//server thread buffer[1024]

http.createServer(function(req,res){
	var geturl=url.parse(req.url).pathname;
	switch(geturl){
		case '/login':
			reslogin(res);
			break;
		case '/dologin':
			respost(req,res);
			break;
		default:
			resError(res);
			break;

	}
}).listen(3000);

console.log('server start');

function resError(res){
	res.writeHead(404,{'Content-type':'text/plain'});
	res.end('page missing');
}

function reslogin(res){
	res.writeHead(200,{'Content-type':'text/html'});
	var realPath=__dirname+'/assets/'+url.parse('login.html').pathname;
	var loginPage=fs.readFileSync(realPath,'utf-8');
	res.end(loginPage);	
}

function respost(req,res){
	var postData="";
	req.setEncoding('utf8');

	//进行监听发送数据事件
	req.addListener('data',function(postChunkData){
		postData+=postChunkData;
	});

	req.addListener('end',function(){
		//console.log(postData);
		var reqobj=querystring.parse(postData);
		var name=reqobj.username;
		var pass=reqobj.pass;

		console.log(name);
		console.log(pass);

		if(name=="laoshan" && pass=="12345"){
			res.writeHead(200,{'Content-type':'text/plain'});
			res.end('登录成功');
		}else{
			res.writeHead(200,{'Content-type':'text/plain'});
			res.end('登录失败');
		}

	})
}