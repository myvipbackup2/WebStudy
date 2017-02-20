/**
 * Created by lizixiang on 2017/2/20.
 */

define(['jquery'], function ($) {

    function Banner() {
    }

    Banner.prototype.init = function (options) {

        var setting = {  //默认参数
            target: document.body,
            btnStyle:'square'  //square circle
        };

        $.extend(setting, options);

        // HTML元素
        var oContainer = $('<div class="banner-container"></div>'),
            oBanner = $('<div class="banner-banner"></div>'),
            oBtn = $('<div class="banner-btn"></div>'),
            oPrev = $('<a href="javascript:;" class="banner-prev"></a>'),
            oNext = $('<a href="javascript:;" class="banner-next"></a>'),
            oTab = $('<ul class="banner-tab"></ul>');

        //插入图片和数字列表
        for (var i = 0; i < setting.imgSrc.length; i++) {
            var oImg = new Image();
            oImg.src = setting.imgSrc[i];
            oBanner.append(oImg);
            oTab.append('<li>' + (i + 1) + '</li>');
        }

        if (setting.btnStyle == 'circle'){  //判断btn样式正方形还是圆形
            oTab.children().addClass('circle').html('');
        }

        //在内存中做插入操作
        oTab.children().eq(0).addClass('banner-selected');
        oBtn.append(oPrev).append(oNext);  //把前后插入按钮容器
        oContainer.append(oBanner).append(oBtn).append(oTab); //把图片，按钮，tab都插入容器
        //在DOM中插入
        $(setting.target).append(oContainer);

        //轮番代码
        var aLi = oTab.children();
        var aImg = oBanner.children();
        this.index = 0; //代表当前正在显示的图片的全局索引
        this.timer = null;
        var _this = this;

        oBanner.css({
            width: aImg[0].offsetWidth * aImg.length + 'px' //初始化宽度
        });

        for (var i = 0; i < aLi.length; i++) {
            aLi.eq(i).hover(function () {
                _this.index = $(this).index();
                changeImg(_this.index);
            });
            aLi[i].onselectstart = function () {
                return false;
            };
        }

        function changeImg(index) {
            aLi.eq(index).addClass('banner-selected').siblings().removeClass('banner-selected');
            oBanner.css({
                left: -index * aImg[0].offsetWidth //用css3的transition实现过度
            });
        }

        oPrev.on('click', function () {
            if (_this.index == 0) {
                _this.index = aImg.length - 1;
            } else {
                _this.index--;
            }
            changeImg(_this.index);
        });

        oNext.on('click', function () {
            if (_this.index == aLi.length - 1) {
                _this.index = 0;
            } else {
                _this.index++;
            }
            changeImg(_this.index);
        });

        function run() { //自动轮番
            _this.timer = setInterval(function () {
                oNext.trigger('click');
            }, 2500)
        }

        run();

        oContainer.hover(function () {
            clearInterval(_this.timer);
        }, function () {
            run();
        });

    };

    return Banner;

});