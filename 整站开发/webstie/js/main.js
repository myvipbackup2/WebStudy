/**
 * Created by lizixiang on 2017/2/21.
 */
$(function () {

    var $banner = $('#banner .wrap');
    var $bannerPrev = $('#banner-prev');
    var $bannerNext = $('#banner-next');
    var $bannerImg = $('#banner .banner-img a');
    var $clientsPrev = $('#clients-prev');
    var $clientsNext = $('#clients-next');
    var $clients = $('#clients .links');
    var index = 0;
    var timer = null;

    function changeImg(index) {
        $bannerImg.fadeOut(600).eq(index).fadeIn(600);
    }

    $bannerPrev.on('click', function () {
        index--;
        index = index < 0 ? $bannerImg.length - 1 : index;
        changeImg(index);
    });

    $bannerNext.on('click', function () {
        index++;
        index = index > ($bannerImg.length - 1) ? 0 : index;
        changeImg(index);
    });

    function run() {
        timer = setInterval(function () {
            $bannerNext.trigger('click');
        }, 1500)
    }

    run();

    $banner.hover(function () {
        clearInterval(timer);
    }, function () {
        run();
    });

    $clientsPrev.on('click', function () {
        $clients.eq(0).toggleClass('hide');
        $clients.eq(1).toggleClass('hide');
    });

    $clientsNext.on('click', function () {
        $clients.eq(0).toggleClass('hide');
        $clients.eq(1).toggleClass('hide');
    });

});