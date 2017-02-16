//index.html index.css leaf.js require.js-->index.js->leaf.js

<div id="container">
	<img src="xx.png">
	<img src="xx.png">
	<img src="xx.png">
	<img src="xx.png">
</div>

oContainer.appendChild(oImg)

Leaf类  同一个时间 new出四个叶子（形状、宽、左侧距离、oContainer）
setInterval(function(){},Math.random()*2000)




define(function (require,exports,module) {
    //Do setup work here
    console.log("123");
    /*
    return {
        color: "black",
        size: "unisize"
    }*/

    exports.demo={
    	color: "black",
        size: "unisize"
    }
});