/**
 * Created by xwc on 2016/12/2.
 */
/*弹出搜索框*/
$(document).ready(function () {
    $("#search-btn").click(function () {
        $("#searchbox").css(
            {
                "display": "block",
                "opacity": "1",
                // "transform": "scale(1, 1)",
                "-webkit-transform": "scale(1, 1)",
                // "-moz-transform": "scale(1, 1)",
                "-webkit-animation": "searchbox 0.5s linear 0s 1"

            }
            );
    })
});

/*关闭框*/
$(document).ready(function () {
    $("#close-btn").click(function () {
        $("#searchbox").css(
            {
                "display": "none",
                "opacity": "0"
            }
        );
    })
});


/*回顶部*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100){
            $("#gototop2").css(
                {
                    "display": "block"
                }
            )
        }
        else{
            $("#gototop2").css(
                {
                    "display": "none"
                }
            )
        }
    })
});

/*回顶部图标出现*/
$(document).ready(function () {
    $("#gototop2").click(function () {
        $("body,html").animate({scrollTop:0},500);
        return false;
    })
});

/*图片轮播*/
$(document).ready(function () {
    var bannercontainer = $(".banner-container"),
        arrowleft = bannercontainer.find(".banner-arrow-left"),
        arrowright = bannercontainer.find(".banner-arrow-right"),
        swiperwrapper = bannercontainer.find(".swiper-wrapper"),
        greenbtn = bannercontainer.find(".banner-pagination span"),
        i = 0,
        onewidth = bannercontainer.find("a").eq(0).width();

    /*鼠标点下标*/
    greenbtn.on("click", function () {
        $(this).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
        var index = $(this).index();
        i= index;
        swiperwrapper.animate({
            "left": -onewidth*index -750
        })
    });
    /*向左的按钮*/
    arrowleft.on("click", function () {
        // $(this).addClass("")
        // var index = $(this).index() + 1;
        moveright()
    });

    function moveright() {
        i++;
        if(i == 8){
            $(".swiper-wrapper").css({"left":"-750px"});
            i=1;
        }
        swiperwrapper.animate({
            "left": -onewidth * i -750
        });
        if(i == 7){
            greenbtn.eq(0).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
        }
        else {
            greenbtn.eq(i).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
        }
    }
    /*向右的按钮*/
    arrowright.on("click", function () {
        // $(this).addClass("")
        // var index = $(this).index() + 1;
        moveleft()
    });

    function moveleft() {
        i--;
        if(i == -2){
            $(".swiper-wrapper").css({"left":"-5250px"});
            i=5;
        }
        swiperwrapper.animate({
            "left": -onewidth * i - 750
        });
        if(i == -1){
            greenbtn.eq(6).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
        }
        else {
            greenbtn.eq(i).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
        }
    }

    /*自动轮播*/
    var lunbo = setInterval(moveright, 2500);
    
    /*鼠标悬浮时停止*/
    $(".banner-container").hover(function () {
        clearInterval(lunbo)
    }, function () {
        lunbo = setInterval(moveright, 2500);
    })
});

/*故事轮播*/
$(document).ready(function () {
    var storycontainer = $("#storycont"),
        // arrowleft = bannercontainer.find(".banner-arrow-left"),
        // arrowright = bannercontainer.find(".banner-arrow-right"),
        swiperwrapper = storycontainer.find(".swiper-wrapper2"),
        greenbtn = storycontainer.find(".story-pagination span"),
        i2 = 0,
        onewidth = storycontainer.find(".swiper-slide").eq(0).width();

    /*下标*/
    greenbtn.on("click", function () {
        $(this).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
        var index = $(this).index();
        i2= index;
        swiperwrapper.animate({
            "left": -onewidth*index
        })
    });
    function moveright2() {
        i2++;
        if(i2 == 3){
            $(".swiper-wrapper2").css({"left":0});
            i2=1;
        }
        swiperwrapper.animate({
            "left": -onewidth * i2
        });
        if(i2 == 2){
            greenbtn.eq(0).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
        }
        else {
            greenbtn.eq(i2).addClass("swiper-active-switch").siblings().removeClass("swiper-active-switch");
        }
    }
    /*自动轮播*/
    var lunbo2 = setInterval(moveright2, 5000);

    /*鼠标悬浮时停止*/
    $("#storycont").hover(function () {
        clearInterval(lunbo2)
    }, function () {
        lunbo2 = setInterval(moveright2, 5000);
    })
});
