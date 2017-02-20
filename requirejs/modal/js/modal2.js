/**
 * Created by lizixiang on 2017/2/19.
 */

define(['jquery'], function ($) {

    return {
        open: function (options) {

            var setting = {
                width: 400,
                height: 300,
                title: '初始化中...'
            };
            $.extend(setting, options);

            var that = this;
            this.$container = $('<div class="modal-container"></div>');
            var $mask = $('<div class="modal-mask"></div>').on('click', function () {
                that.close();
            });
            var $main = $('<div class="modal-main"></div>').css({
                width: setting.width,
                height: setting.height,
                marginLeft: -setting.width / 2,
                marginTop: -setting.height / 2
            });
            var $modalTitle = $('<div class="modal-title clearfix"></div>');
            var $title = $('<span class="fl">' + setting.title + '</span>');
            var $close = $('<span class="fr">[X]</span>').on('click', function () {
                that.close();
            });
            var $content = $('<div class="modal-content"></div>').load(setting.url);

            $modalTitle.append($title).append($close);
            $main.append($modalTitle).append($content);
            this.$container.append($mask).append($main);
            $(document.body).append(this.$container.hide(0).fadeIn(600));

        },

        close: function () {
            var that = this;
            this.$container.fadeOut(600,function () {
                that.$container.remove();
            });
        }


    }

});