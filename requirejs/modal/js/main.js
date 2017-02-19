/**
 * Created by lizixiang on 2017/2/19.
 */

require(['jquery', 'modal'], function ($, Modal) {

    $('#btn').on('click', function () {
        Modal.open({
            width: 500,
            height: 400,
            title: '欢迎登录',
            url: 'login.html'
        });
    });


});