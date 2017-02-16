
/*
person.think();  
person.answer();   I am answering other questions
过了5秒 thinking 5 秒 输出正确答案*/

function person(){
	this.think=function(callback){
		console.log('thinking ~~~~~~');
		setTimeout(function(){
			callback();
		},5000);
	};


	this.answer=function(){
		console.log("I am answering other questions");
	};
}

var person=new person();
person.think(function(){
	console.log("thinking 5 senconds get the right answer");
});
person.answer();

/*
thinking ~~~~~~
I am answering other questions
_
thinking 5 senconds get the right answer*/