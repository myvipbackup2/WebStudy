//module.exports  exports  ---- 直接赋值 引用赋值
/*
var a="123";  -->0x1c2b5a

var b={       -->0x12345c
	'a':123
}

var a=456;    -->0x1b2a3a
b.a=456;

console.log(a);
console.log(b);*/



/*
function test(){

}
var a=new test();
console.log(a instanceof test);
console.log(a instanceof Object);*/

/*
Object.prototype产生的是 {}
Function.prototype 产生的是function (){}
Function.prototype.isPrototypeOf(Object)*/

/*class Time extends Object{
	public $bb;   public private protected

	public function __construct($name){
		parent::__construct();
		this->bb=$name;
	}

	public function aa(){
		echo this->bb."is shouting";
	}
}

$time=new Time('laoxie');
$time.aa();*/

/*

function Demo(){
	this.aa="jjj";
	this.bb=function(){
		console.log(cc);
	}
}

Demo.prototype.cc=function(){
	console.log('laoshan');
}

var demo=new Demo();*/



//var demo=new Demo();
//var demo1=new Demo();

/*
function Demo2(){
	this.aa="789";
	this.yy=function(){
		console.log(908);
	}
}

new(1:调用了构造器  2: 父类.call(子类))

call()  bind()

Demo2.prototype=new Demo();
var demo2=new Demo2();
//demo2.bb();
console.log(demo2.aa);*/




/*
Demo.prototype.cc=function(){
	console.log(456);
}*/
/*
var demo=new Demo();
//demo.bb();
console.log(demo.__proto__==Demo.prototype);*/
//demo.cc();

/*
var demo={
	'aa':'123',
	'bb':function(){
		console.log(123);
	}
}*/






//js解释器  先var aa=undefined  var bb=undefined function bb(){}








/*
function Time(name){
	//this.aa=name,
	var aa="laoxie";
	this.bb=function(){
		//console.log(this.aa+" is shouting");
		//console.log(aa);
		console.log(this);
		//return this.aa;
		//return aa;
	}
}*/

//var time=new Time('laoxie');
//console.log(time.bb());
//time.bb();
//console.log(time.aa);
//time.aa="xiaodong";
//console.log(time.aa);





//Function  Object
/*
var obj=new Object();

console.log(Object.prototype);   //{}
console.log(obj.__proto__);

console.log(obj.__proto__ === Object.prototype);  
Object.construct()

function Object(){

}*/

//function有prototype  object有__proto__
/*
var arr=new Array();
console.log(Array.prototype);
console.log(arr.__proto__);


Array.prototype=new Object();*/
//var obj1=new Object=Array.prototype;
//console.log(Array.prototype  == obj1.__proto__);



/*
console.log(typeof(Function));
console.log(typeof(Object));

console.log(Function instanceof Object);
console.log(Object instanceof Function);

//Function Array
console.log(Array instanceof Object);
console.log(Object instanceof Array);
//console.log(typeof(Array));

var func=new Function();
console.log(typeof(func));   //空Function被实例化 func-->function

var obj=new Object();
console.log(typeof(obj));    //object

var arr=new Array();
console.log(typeof(arr));    //object*/



