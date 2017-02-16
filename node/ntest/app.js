var http=require('http');
var mysql=require('mysql');  //mysql.js  mysql/index.js
//var demo=require('./demo.js');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.end('<h1>hello</h1>');
}).listen(3000);

console.log("server start port 3000");

//mime(image/png)

/*
nodejs (自定义模块、系统模块、第三方模块)

自定义模块(加载的时候  必须带上路径)

node_modules

系统模块(系统安装路径下的node_modules)

第三方模块(1:如何安装 2:安装去了哪里)
npm install mysql  (mysql安装在当前项目文件夹下的node_modules)
npm install -g supervisor()*/
/*
Linux  red hat(rhel  fedora  centos) yum install mysql  
       debian(debian ubuntu) apt-get install mysql

包管理系统  源
nodejs   npm npmjs.com 
         cnpm */