var util=require('util');
var Animal=require('./animal.js');

function Bird(){
	Animal.call(this);
	this.say=function(){
		console.log('ji...ji');
	}
}

util.inherits(Bird,Animal);

module.exports=Bird;
