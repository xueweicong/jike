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

/*header会员课程变绿*/
$(document).ready(function () {
    $(".header-nav li:nth-child(3)").attr(
        "style", "color: rgb(53, 181, 88);"
    );
    $(".header-nav li:nth-child(3) .arrow-icon").attr(
        "style", "border-color: rgb(53, 181, 88);"
    )
});


/*视频效果*/
$(document).ready(function () {
    var lessonlistid = $("#changeid");
    //第一种视频列表
    var lessonlist = $(".lesson-list");
    //第二种视频列表
    var lessonlist2 = $(".lesson-list2");
    var lesson = lessonlistid.find("ul").find("li");
    var lesson2 = lessonlist2.find("ul").find("li");
    $(".kuai-icon").mouseup(function () {
        lessonlistid.removeClass("lesson-list2");
        lessonlistid.addClass("lesson-list");
        $(lesson).each(function () {
            var lessoninforp2 = $(this).find(".lesson-infor").find("p");
            var lessoninfortank2 = $(this).find(".lesson-infor").find(".zhongji");
            var lessonlearnnumber2 = $(this).find(".lesson-infor").find(".learn-number");
            lessoninforp2.attr(
                "style", "height:0px;opacity:0;display:none;"
            );
            lessoninfortank2.attr(
                "style", "display:none"
            );
            lessonlearnnumber2.attr(
                "style", "display:none"
            )
        });
    });
    $(".list-icon").mouseup(function () {
        lessonlistid.removeClass("lesson-list");
        lessonlistid.addClass("lesson-list2");
        $(lesson).each(function () {
            var lessoninforp2 = $(this).find(".lesson-infor").find("p");
            var lessoninfortank2 = $(this).find(".lesson-infor").find(".zhongji");
            var lessonlearnnumber2 = $(this).find(".lesson-infor").find(".learn-number");
            lessoninforp2.attr(
                "style", "height:36px;opacity:1;display:block;"
            );
            lessoninfortank2.attr(
                "style", "display:block"
            );
            lessonlearnnumber2.attr(
                "style", "display:block"
            )
        });
        //lessoninforp.attr("style", "display:block");
        //lesson.unbind();
        //lesson2.bind();
    });
    //var lesson2 = lessonlist2.find("ul").find("li");
    $(lesson).each(function () {
        console.log("111112");
        var heart = $(this).find(".lessonimg-box").find(".user-action");
        var lessonplay = $(this).find(".lessonplay");
        var lessoninfor = $(this).find(".lesson-infor");
        var lessoninforp = lessoninfor.find("p");
        var lessoninfortank = lessoninfor.find(".zhongji");
        var lessonlearnnumber = lessoninfor.find(".learn-number");
        var lessoniconbox = lessoninfor.find(".lessonicon-box");
        $(this).hover(
            function () {
                heart.attr("style", "display:block");
                lessonplay.stop();
                lessonplay.animate({
                    "opacity": '1'
                });

                if (lessonlistid.hasClass("lesson-list")) {
                    lessoninfor.stop();
                    lessoninfor.animate({
                        "height": "175px"
                    });
                    lessoninforp.stop();
                    lessoninforp.attr("style", "display:block");
                    lessoninforp.animate({
                        "height": "52px",
                        "opacity": "1"
                    });
                    lessoninfortank.attr("style", "display:block");
                    lessonlearnnumber.attr("style", "display:block");
                    lessoniconbox.stop();
                    lessoniconbox.animate({
                        "bottom": "-2px"
                    });
                }
                // else {
                //     lessoninforp.attr("style", "display:block");
                //     lessoninfortank.attr("style", "display:block");
                //     lessonlearnnumber.attr("style", "display:block");
                // }
                // lessonplay.fadeIn(2000);
                // console.log("1111134");
                //heart.fadeIn(100);
                //lessonplay.attr("style", "opacity:1");
            },
            function () {
                heart.attr("style", "display:none");
                lessonplay.stop();
                lessonplay.animate({
                    "opacity": 0
                });
                if (lessonlistid.hasClass("lesson-list")) {
                    lessoninfor.stop();
                    lessoninfor.animate({
                        "height": 88
                    });
                    lessoninforp.stop();
                    lessoninforp.attr("style", "display:none");
                    lessoninforp.animate({
                        "height": "0px",
                        "opacity": "0"
                        //"display": "none"
                    });
                    lessoninfortank.attr("style", "display:none");
                    lessonlearnnumber.attr("style", "display:none");
                    lessoniconbox.stop();
                    lessoniconbox.animate({
                        "bottom": "4px"
                    });
                }
                // else {
                //     lessoninforp.attr("style", "display:none");
                //     lessoninfortank.attr("style", "display:none");
                //     lessonlearnnumber.attr("style", "display:none");
                // }
                    // lessonplay.attr("style", "opacity:0");
            }
        );
    });
    // $(lesson2).each(function () {
    //     var heart = $(this).find(".lessonimg-box").find(".user-action");
    //     var lessonplay = $(this).find(".lessonplay");
    //     $(this).hover(
    //         function () {
    //             heart.attr("style", "display:block");
    //             lessonplay.stop();
    //             lessonplay.animate({
    //                 "opacity": '1'
    //             });
    //         },
    //         function () {
    //             heart.attr("style", "display:none");
    //             lessonplay.stop();
    //             lessonplay.animate({
    //                 "opacity": 0
    //             });
    //         }
    //     )
    // });

        // if (lessonlistid.hasClass("lesson-list")) {
        //     $(lesson).each(function () {
        //         console.log("111112");
        //         var heart = $(this).find(".lessonimg-box").find(".user-action");
        //         var lessonplay = $(this).find(".lessonplay");
        //         var lessoninfor = $(this).find(".lesson-infor");
        //         var lessoninforp = lessoninfor.find("p");
        //         var lessoninfortank = lessoninfor.find(".zhongji");
        //         var lessonlearnnumber = lessoninfor.find(".learn-number");
        //         var lessoniconbox = lessoninfor.find(".lessonicon-box");
        //         $(this).hover(
        //             function () {
        //                 heart.attr("style", "display:block");
        //                 lessonplay.stop();
        //                 lessonplay.animate({
        //                     "opacity": '1'
        //                 });
        //                 lessoninfor.stop();
        //                 lessoninfor.animate({
        //                     "height": "175px"
        //                 });
        //                 lessoninforp.stop();
        //                 lessoninforp.attr("style", "display:block");
        //                 lessoninforp.animate({
        //                     "height": "52px",
        //                     "opacity": "1"
        //                 });
        //                 lessoninfortank.attr("style", "display:block");
        //                 lessonlearnnumber.attr("style", "display:block");
        //                 lessoniconbox.stop();
        //                 lessoniconbox.animate({
        //                     "bottom": "-40px"
        //                 });
        //
        //                 // lessonplay.fadeIn(2000);
        //                 // console.log("1111134");
        //                 //heart.fadeIn(100);
        //                 //lessonplay.attr("style", "opacity:1");
        //             },
        //             function () {
        //                 heart.attr("style", "display:none");
        //                 lessonplay.stop();
        //                 lessonplay.animate({
        //                     "opacity": 0
        //                 });
        //                 lessoninfor.stop();
        //                 lessoninfor.animate({
        //                     "height": 88
        //                 });
        //                 lessoninforp.stop();
        //                 lessoninforp.attr("style", "display:none");
        //                 lessoninforp.animate({
        //                     "height": "0px",
        //                     "opacity": "0"
        //                     //"display": "none"
        //                 });
        //                 lessoninfortank.attr("style", "display:none");
        //                 lessonlearnnumber.attr("style", "display:none");
        //                 lessoniconbox.stop();
        //                 lessoniconbox.animate({
        //                     "bottom": "-16px"
        //                 });
        //
        //                 // lessonplay.attr("style", "opacity:0");
        //             }
        //         );
        //     });
        // } else {
        //     $(lesson).each(function () {
        //         var heart = $(this).find(".lessonimg-box").find(".user-action");
        //         var lessonplay = $(this).find(".lessonplay");
        //         $(this).hover(
        //             function () {
        //                 heart.attr("style", "display:block");
        //                 lessonplay.stop();
        //                 lessonplay.animate({
        //                     "opacity": '1'
        //                 });
        //             },
        //             function () {
        //                 heart.attr("style", "display:none");
        //                 lessonplay.stop();
        //                 lessonplay.animate({
        //                     "opacity": 0
        //                 });
        //             }
        //         )
        //     })
        // }

});


/*分页条*/
$(document).ready(function () {
    var pagesNav = $("#page-nav .pages li");
    var pgNext = $("#page-nav .pages .pgNext");
    console.log(pgNext.length);
    var pages = {
        pagination: 95,
        currentPagination:null
    };
    pages.currentPagination = 1;
    empty();

    var pagesLi = '<li class="page-number"></li>';
    var pagesLi2 = '<li class="thpoint">...</li>';
    //var pagenumber = $(".page-number");

    //初始化7个li
    for (var i = 0; i < 7; i++){
        pgNext.eq(2).before(pagesLi);
    }

    pageNumber();
    pgNext.eq(2).before(pagesLi2);

    //变化页数
    function pageNumber() {
        var pagenumber = $(".page-number");
        for (var i = 0; i < 7; i++){
            //pgNext.eq(2).before(pagesLi);
            //var pagenumber = $(".page-number");
            if (pages.currentPagination <= 4){
                pagenumber.eq(i).text(i + 1);
            }
            else if (pages.currentPagination >= pages.pagination - 3) {
                pagenumber.eq(i).text(i + 89);
            }
            else {
                pagenumber.eq(i).text(pages.currentPagination - 3 + i);
            }
            if (pagenumber.eq(i).text() == pages.currentPagination){
                pagenumber.eq(i).addClass("pgCurrent").siblings().removeClass("pgCurrent");
            }
        }
        $(".pages .pagenow").find("input").val(pages.currentPagination) ;
    }

    //判断首页尾页上一页下一页是否满足empty
    function empty() {
        if (pages.currentPagination <= 1){
            console.log(pgNext[0].innerHTML);
            console.log(pgNext[3].innerHTML);
            pgNext.eq(0).addClass("pgEmpty");
            pgNext.eq(1).addClass("pgEmpty");
        }
        else {
            pgNext.eq(0).removeClass("pgEmpty");
            pgNext.eq(1).removeClass("pgEmpty");
        }
        if (pages.currentPagination >= pages.pagination){
            pgNext.eq(2).addClass("pgEmpty");
            pgNext.eq(3).addClass("pgEmpty");
        }
        else {
            pgNext.eq(2).removeClass("pgEmpty");
            pgNext.eq(3).removeClass("pgEmpty");
        }
    }
    // function current() {
    //     $(".page-number").text()
    // }

    //点击数字按钮函数
    $(function clickPageNumber() {
        var pagenumber = $(".page-number");
        for (var i = 0; i < 7; i++){
            pagenumber.eq(i).on("click", function () {
                pages.currentPagination = $(this).text();
                pageNumber();
                empty();
            })
        }
    });



    var pageNow = $(".pages .pagenow");
    //输入框改变
    $(function () {
        //pgNext.eq(4).find("input").val(pages.currentPagination) ;
        pgNext.eq(4).on("click", function () {
            if (pageNow.find("input").val() < 95 && pageNow.find("input").val() > 0) {
                if (pageNow.find("input").val() != pages.currentPagination) {
                    pages.currentPagination = parseInt(pageNow.find("input").val());
                    pageNumber();
                    empty();
                }
            }
            else {
                alert("输入有问题！");
            }
        });
    });

    //首页尾页上一页下一页的点击事件
    //首页
    pgNext.eq(0).bind("click", function (){
        // if (pgNext.eq(0).hasClass("pgEmpty")){
        //
        // }
        pages.currentPagination = 1;
        pageNumber();
        empty();

    });
    //尾页
    pgNext.eq(3).bind("click", function (){
        pages.currentPagination = pages.pagination;
        pageNumber();
        empty();
    });
    //上一页
    pgNext.eq(1).bind("click", function () {
        pages.currentPagination -= 1;
        pageNumber();
        empty();
    });
    //下一页
    pgNext.eq(2).bind("click", function () {
        pages.currentPagination = parseInt(pages.currentPagination) + 1;
        //console.log(pages.currentPagination);
        pageNumber();
        empty();
    });

    //移除和重新加载 有问题
    $(function () {
        for (var i = 0; i < 4; i++){
            if (pgNext.eq(i).hasClass("pgEmpty")){
                pgNext.eq(i).unbind("click");
            }
            else {
                pgNext.eq(i).on("click");
            }
        }
    });

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




/* 这是首页的部分与本次作业无关*/
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
