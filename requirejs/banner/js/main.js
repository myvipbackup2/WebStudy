/**
 * Created by lizixiang on 2017/2/20.
 */

require(['jquery', 'Banner'], function ($, Banner) {

    var oBtn1 = $('#btn1');
    var oBtn2 = $('#btn2');

    oBtn1.on('click', function () {
        var banner = new Banner();
        banner.init({
            imgSrc: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
            btnStyle: 'circle'
        });
    });

    oBtn2.on('click', function () {
        var banner = new Banner();
        banner.init({
            imgSrc: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'],
            btnStyle: 'square'
        });
    });

});