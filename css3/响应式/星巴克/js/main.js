/**
 * Created by lzx on 2017/1/6 0006.
 */

$(function () {

    // menu
    $('#menu .icon').click(function () {
        $('#menu .menu').height($(window).height()*1.5);
        $('#menu .menu').css('left', '0');
    });

    $(window).scroll(function () {
        $('#menu .menu').css('left', '-270px');
    });

    $(document).click(function () {
        $('#menu .menu').css('left', '-270px');
    });

    $('#menu .icon').click(function () {
        event.stopPropagation();
    });
    $('#menu .menu').click(function () {
        event.stopPropagation();
    });


    // slider
    var aDot = $('.slider-dot .dot');
    aDot.click(function () {

        var $dis = $(window).width()-$('.slider-img ul').width();

        $('.slider-img ul').css('left',$dis+'px');

        // $('.slider-img ul').animate({'left':$dis+'px'},500);


    });


});
