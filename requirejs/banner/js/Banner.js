/**
 * Created by lizixiang on 2017/2/20.
 */

define(['query'], function ($) {

    function Banner() {

    }

    Banner.prototype.init = function (options) {
        var setting = {
            imgSrc: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
            target: 'document.body',
        };
        var oContainer = $('<div class="banner-container"></div>');
        var oBanner = $('<div class="banner-banner"></div>');
        var oBtn = $('<div class="banner-btn"></div>');
        var oPrev = $('<a href="javascript:;" class="banner-prev"></a>');
        var oNext = $('<a href="javascript:;" class="banner-next"></a>');
        var oTab = $('<ul class="banner-tab"></ul>');

        //插入图片
        for (var i = 0; i < setting.imgSrc.length; i++) {
            var oImg = new Image();
            oImg.src = 'img/' + setting.imgSrc[i];
            oBanner.append(oImg);
        }
        oBtn.append(oPrev).append(oNext);  //把前后插入按钮容器
        oContainer.append(oBanner).append(oBtn).append(oTab); //把图片，按钮，tab都插入容器
        $(setting.target).append(oContainer);

    };

    return Banner;

});