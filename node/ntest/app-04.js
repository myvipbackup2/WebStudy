//JS异步回调
function havelunch(food,drink,callback){
	console.log('Having lunch of '+food+' | '+drink);
	if(callback && typeof(callback)=='function'){
		//callback();
		setTimeout(function(){
			callback();
		},2000);
	}
}

havelunch('toast','coffee',function(){
	console.log('Finished lunch');
});

//Function.prototype=function(){}

