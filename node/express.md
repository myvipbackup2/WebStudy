##使用Express框架操作MongoDB

####1：给项目安装Express的框架

Express 3 版本   3.5.0
Express 4 版本   
C:\Users\shine\AppData\Roaming\npm   关键目录

(1)npm install -g express   //默认安装的最新的express
   npm install -g express-generator

   npm install -g express@3.5.0  //npm install static-favicon
(2)express -e testyon  
   // -e:让你的express框架的前端模板语言为ejs  默认jade

(3)  cd testyon && npm install

(4)  分析项目还需要哪些第三方模块
     （1）连接数据库mongodb驱动模块 mongodb
          在testyon目录下去执行npm install mongodb
      (2) npm install connect-mongo
      (3) npm install connect-flash
          npm install formidable
npmjs.org

node_module  express ejs  require('express')
                          require(文件夹名 js文件名)

(5)  node app.js  //app.js是Express框架的入口文件
     http://localhost:3000

###分析一下Express的生死流程
(1) 分析app.js

app.js --nodejs server的入口文件
package.json --安装第三方模块的文件

node_modules --用来存放所有安装的第三方模块
public  --用来存放静态文件 CSS/IMG/JS
views   --用来存储静态页面 HTML/EJS
          接收来自后台的数据 显示数据<%= 变量名 %>
          <?php echo $name;?>
          变量名：array object posts--array

	javascript 循环 for for-in  foreach
	var posts=[{'老毕不容易','神奇的国度','老单写的'},
		   {'刘翔退役了','演技提高了','可以进演艺圈了'}
		];
	<%= posts.forEach(function(post,index){%>
		<h1>post.title</h1>
		<p>post.content</p>

	<%= })%>

routes ---MVC框架里面的Controllers  Routes路由的功能
routes/index.js  --起到了路由的功能

var routes=require('./routes');

var routes=require('./routes.js') index.js->routes.js

####node app.js---加载app.js  
1:加载路由 通过路由找到控制器下的方法 通过方法调用前端页面

app.js->JS Function index()->{
	res.render('index.ejs',{
			'title':'hello',
                        'posts':post
			})
}

express使用了什么样的方式找到控制器名的 --routes代码要你自己写

app.get('/', routes.index);
app.get('/users', user.list);

index.php-->控制器 User.php-> 
public function index(){
	$this->load->view('index.php',$data);
}

(2) 改装routes文件夹为controllers文件夹
    把routes文件夹下的index.js改名成routes.js
    把routes.js复制到testyon项目的根目

(3) 改装后的MVC的express框架的生死流程

1：先修改routes.js 去写路由代码
   注册功能
   app.get('/signup',user.signup);

2：去controllers下面写控制器方法
   exports.signup -->跳转的view

3：view->controllers  (post)
   (1)通过app.post完成路由
   (2)controller要从view中接受数据 
      req.body.（form表单中的那些name属性）

####PHP CI

$name=$this->input->post('username');
$pass=$this->input->post('password');

var name=req.body.username;
var pass=req.body.password;

####从控制器传递到模型的

$data=array(
	name->$name,
	pass->$pass
)

var 

public function __construct(){
	$this->load->model('user_model');
}

$this->load->model('user_model');
$this->user_model->getName($data);

$this->user_model->getName($name,$pass);

####PHP 连接一个数据库

mysql_connect("localhost","root","");
new Server(settings.host, Connection.DEFAULT_PORT, {})

mysql_select_db('test5');

nodejs连接mongodb
localhost这个地址 放在了settings.js

db.js
require('settings.js');

PHPINFO()




####2：根据项目建立mongodb数据库

xblog
----->users name password

####3：实现注册和登录功能


res.writeHead()
res.end()   ------res.render()  res.send()
req.cookie
req.session

/static-favicon

if('/favicon.ico'==pathname){
	return;
}

/list --->doc
/favicon.ico --->err
User.get(username,function(err,doc){
	if(err){
		throw(err);
	}
})

request respones简化 connect



forEach(function(){
	(1)split(';')
	(2)split('=')
	(3)Querysting('string')
})