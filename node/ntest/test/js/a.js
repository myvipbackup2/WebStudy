define([],function(){
	function arrSort(arr){
		// if(){
			arr.sort(function(a,b){
				return a-b;
			});
			return arr;
		// }else{
		// 	return "输入参数不是数组";
		// }
	}

	return arrSort(arr);
})