//回调分为 同步回调 和 异步回调
function waitFive(name,function_name){
	//空转5秒
	var pus=0;
	var currentime=new Date();
	while(pus<5000){
		var now=new Date();
		pus=now-currentime;
	}

	function_name(name);
}

function echo(name){
	console.log(name);
}

waitFive('laoshan',echo);
console.log('its over');