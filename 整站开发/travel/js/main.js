/**
 * Created by lizixiang on 2017/2/28.
 */
$(function () {

    $('#header .nav li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('#navBox .trip-nav li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

});