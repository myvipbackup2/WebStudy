/**
 * Created by lizixiang on 2017/2/19.
 */

// require(['./sort'], function (sort) {
//
//     // var arr = [1,34,4,2,6,8,42,44,61];
//     var arr = '2322425';
//     var val = sort(arr);
//     console.log(val);
//
// });

define(function (require) {
    var sort = require('./sort');
    var arr = [1,34,4,2,6,8,42,44,61];
    // var arr = '2322425';
    var val = sort(arr);
    console.log(val);
});