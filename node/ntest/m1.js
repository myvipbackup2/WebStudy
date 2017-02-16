function Demo(){
	this.aa="laoshan";
	this.bb=function(){
		console.log(this.aa);
	}
}


Demo.prototype.cc=function(){
	console.log("laoxie");
}

//exports是module.exports引用


var demo=new Demo();
//module.exports=Demo;
//exports.demo=Demo;
exports.demo=demo;


