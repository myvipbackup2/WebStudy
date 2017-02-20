/**
 * Created by lizixiang on 2017/2/20.
 */

require(['jquery','Banner'], function ($,Banner) {

    var oBtn = $('#btn');

    oBtn.on('click',function () {
        var banner = new Banner();
        banner.init();
    })

});