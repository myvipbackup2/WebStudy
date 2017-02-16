//读取file.txt的时候 停2S 再结束
var fs=require('fs');

/*
var data=fs.readFileSync('file.txt');
console.log(data);*/
fs.readFile('file.txt','utf-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		getData(data);
	}
});

console.log('end');

function getData(data){
	setTimeout(function(){
		console.log(data);
	},2000);
}