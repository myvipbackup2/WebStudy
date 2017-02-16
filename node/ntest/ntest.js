var http=require('http');

http.createServer(function(req,res){
	console.log(req.url);
}).listen(3000);

console.log("server start");

<script src="assets/js/1.js"></script>