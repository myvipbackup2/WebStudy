/**
 * Created by lizixiang on 2017/2/19.
 */

// define(['./isArr'], function (isArr) {
//
//     function sort(arr) {
//         if (!isArr(arr)) {
//             return;
//         }
//         arr.sort(function (a, b) {
//             return a - b;
//         });
//         return arr;
//     }
//
//     return sort;
//
// });

define(function (require) {

    var isArr = require('./isArr');

    function sort(arr) {
        if (!isArr(arr)) {
            return;
        }
        arr.sort(function (a, b) {
            return a - b;
        });
        return arr;
    }

    return sort;

});