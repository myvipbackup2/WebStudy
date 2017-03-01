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

    // 轮番图
    var $aBigImg = $('#slider .big-img li');
    var $aSmallImg = $('#slider .small-img li');
    var $Ul = $('#slider .small-img');
    var $next = $('#next');
    var $prev = $('#prev');
    var bFlag = true;
    var timer = null;
    var index = 0;

    $aBigImg.eq(0).fadeIn().siblings().fadeOut();  //初始化大图
    $Ul.css({
        width: (120 + 2 + 10) * $aBigImg.length
    });

    $aSmallImg.hover(function () {
        index = $(this).index();
        changeImg($(this).index())
    });


    function slide() {  //滑动slider
        if (bFlag) {
            changeImg(4);
        } else {
            changeImg(0);
        }
        bFlag = !bFlag;
    }

    function changeImg(index) {
        $aSmallImg.eq(index).addClass('selected').siblings().removeClass('selected');
        $aBigImg.eq(index).fadeIn().siblings().fadeOut();
        if (index == 4) {
            $Ul.animate({left: -528})
        }
        if (index == 0) {
            $Ul.animate({left: 0});
        }
    }

    $next.on('click', slide);
    $prev.on('click', slide);

    function run() {
        timer = setInterval(function () {
            index++;
            index = index == 8 ? 0 : index;
            console.log(index);
            changeImg(index);
        }, 1500)
    }

    run();

});