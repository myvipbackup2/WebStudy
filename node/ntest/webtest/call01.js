function Class1(){
	this.name="laoxie";
	this.showTxt=function(){
		console.log(this.name);
	}
}

Class1.prototype.cc=function(){
	console.log('error');
}

var obj=new Object();
Class1.call(obj);
obj.name="laoshan";
obj.showTxt();
obj.cc();

