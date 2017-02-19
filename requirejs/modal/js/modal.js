/**
 * Created by lizixiang on 2017/2/19.
 */

define(['jquery'], function ($) {

    return {
        open: function () {

            var that = this;
            this.$container = $('<div class="modal-container"></div>');
            var $mask = $('<div class="modal-mask"></div>').on('click', function () {
                that.close();
            });
            var $main = $('<div class="modal-main"></div>');
            var $modalTitle = $('<div class="modal-title clearfix"></div>');
            var $title = $('<span class="fl">这是标题</span>');
            var $close = $('<span class="fr">[X]</span>').on('click', function () {
                that.close();
            });
            var $content = $('<div class="modal-content"></div>');

            $modalTitle.append($title).append($close);
            $main.append($modalTitle).append($content);
            this.$container.append($mask).append($main);
            $(document.body).append(this.$container);

        },

        close: function () {
            this.$container.remove();
        }


    }

});