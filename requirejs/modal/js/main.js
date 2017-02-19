/**
 * Created by lizixiang on 2017/2/19.
 */

require(['jquery', 'modal'], function ($, Modal) {

    $('#btn').on('click', function () {
        Modal.open();
    });

    $('.modal-mask').on('click',function () {
        Modal.close();
    });



});