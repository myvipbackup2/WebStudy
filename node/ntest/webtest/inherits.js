//util.inherits(construct,superConstruct)
var util=require('util');
var events=require('events'); //events.EventEmitter

function MyStream(){
	//1:子类call到父类的成员属性 成员方法
	events.EventEmitter.call(this);
}

//2:通过inherits 把父类的construct拿到
util.inherits(MyStream,events.EventEmitter);
MyStream.prototype.write=function(data){
	this.emit('data',data);
}

var stream=new MyStream();
stream.on('data',function(postData){
	console.log('Received data : '+ postData);
});

stream.write('laoshan is sleeping');