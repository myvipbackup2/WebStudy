/**
 * Created by lzx on 2017/1/22 0022.
 */

var a = require('./a.js');
var oApp = document.getElementById('app');

// require('style!css!./css/style.css');
require('./css/style.css');

oApp.innerHTML = '<h3>Welcome Webpack!</h3>' + a;
