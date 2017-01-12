/**
 * Created by xwc on 2016/12/23.
 */
/*右边栏*/
$(document).ready(function () {
    $(".s_bri").mouseover(function () {
        $(".lefthide").css({
            "display":"block"
        })
    });
    $(".lefthide").mouseleave(function () {
        $(".lefthide").css({
            "display":"none"
        })
    });
    /*设置和个人中心*/
    $("#s_username_top").mouseover(function () {
        $("#s_user_name_menu").css({
            "display":"block"
        })
    });
    $("#s_user_name_menu").mouseover(function () {
        $("#s_user_name_menu").css({
            "display":"block"
        })
    });
    $("#s_username_top").mouseleave(function () {
        $("#s_user_name_menu").css({
            "display":"none"
        })
    });
    $("#s_user_name_menu").mouseleave(function () {
        $("#s_user_name_menu").css({
            "display":"none"
        })
    });
    $("#s_usersetting_top").mouseover(function () {
        $("#s_user_setting_menu").css({
            "display":"block"
        })
    });
    $("#s_user_setting_menu").mouseover(function () {
        $("#s_user_setting_menu").css({
            "display":"block"
        })
    });
    $("#s_usersetting_top").mouseleave(function () {
        $("#s_user_setting_menu").css({
            "display":"none"
        })
    });
    $("#s_user_setting_menu").mouseleave(function () {
        $("#s_user_setting_menu").css({
            "display":"none"
        })
    });

    /*中间tab切换*/
    // var sMenuMine = $("#s_menu_mine");
    var sMenuItem = $(".s-menu-item");
    console.log(sMenuItem);
    var sContent = $("#s_ctner_contents").find(".s-content");
    var i = 0;
    console.log(sMenuItem.length);
    sMenuItem.click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        if ($(this).attr("data-id") == "100"){
            // sContent.each().attr("id") == "s_content_100"
            for (i = 0; i < sContent.length; i++){
                if (sContent.eq(i).attr("id") == "s_content_100"){
                    sContent.eq(i).css({
                        "display":"block"
                    }).siblings().css({
                        "display":"none"
                    })
                }
            }
            // $(".s-opacity-white-background")
            sMenuItem.not("#s_menu_mine").removeClass("current");
        }else if($(this).attr("data-id") == "1"){
            for (i = 0; i < sContent.length; i++){
                if (sContent.eq(i).attr("id") == "s_content_1"){
                    sContent.eq(i).css({
                        "display":"block"
                    }).siblings().css({
                        "display":"none"
                    })
                }
            }
            $("#s_menu_mine").removeClass("current");
        }else {
            for (i = 0; i < sContent.length; i++){
                if (sContent.eq(i).attr("id") == "s_content_2"){
                    sContent.eq(i).css({
                        "display":"block"
                    }).siblings().css({
                        "display":"none"
                    })
                }
            }
            $("#s_menu_mine").removeClass("current");
        }

    });

    /*回顶部*/
    var dingBu = $("#s_top_feed .to-top");
    dingBu.hover(function () {
        dingBu.addClass("icon-over");
    },
    function () {
        dingBu.removeClass("icon-over");
    });
    dingBu.on("click",function () {
        $("body,html").animate({scrollTop:0},300);
    });

    /*下拉*/
    $(window).scroll(function () {
        //console.log("111111");
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        // console.log(scrollTop,scrollHeight,windowHeight);
        if (scrollTop == 0){
            dingBu.css({
                "visibility": "hidden"
            })
        }
        else {
            dingBu.css({
                "visibility": "visible"
            })
        }
        if (scrollTop >= 250){
            $("#head").addClass("s_down");
            $("#head_wrapper").addClass("s-down");
            $("#s_top_wrap").addClass("s-down");
            $("#head_wrapper2").css({
                "display":"block"
            });
            // var width = $(window).width();
            // $(".s-news-rank-wrapper").css({
            //     "position": "fixed",
            //     "top": "104px",
            //     "right": (width-895)/2 + 5
            // });
            // // $(function () {
            // //     var width = $(window).width();
            // //     $(".s-news-rank-wrapper").css({
            // //         "right": (width-895)/2 + 25
            // //     });
            // // });
            //
            // $(window).resize(function () {
            //     var width2 = $(window).width();
            //     $(".s-news-rank-wrapper").css({
            //         "right": (width2-895)/2 + 5
            //     });
            // });
        }
        else {
            $("#head").removeClass("s_down");
            $("#head_wrapper").removeClass("s-down");
            $("#s_top_wrap").removeClass("s-down");
            $("#head_wrapper2").css({
                "display":"none"
            });
        }
        var width = $(window).width();
        //var height = $(window).height();
        if (scrollTop >= $(window).height()*0.382) {
            //console.log($(window).height());
            // if(width > 1000){
            //
            // }
            // else {
            //     width = 1000
            // }
            $(".s-news-rank-wrapper").css({
                "position": "fixed",
                "top": "104px",
                "right": (width - 895) / 2
            });
        }
        else {
            $(".s-news-rank-wrapper").css({
                "position": "absolute",
                "top": "0px",
                "right": 5
            });
        }
        $(window).resize(function () {
            // if ($(document).width() >= 1000) {
                if (scrollTop >= $(window).height() * 0.382) {
                    var width2 = $(window).width();
                    console.log(width2);

                    // if(width2 > 1000){
                    //
                    // }
                    // else {
                    //     width2 = 1000
                    // }
                    $(".s-news-rank-wrapper").css({
                        "right": (width2 - 895) / 2
                    });
                }
            // }
        });

        if (scrollTop + windowHeight == scrollHeight) {  //滚动到底部执行事件
            console.log("我到底部了");
            if (sMenuItem.eq(1).hasClass("current")){
                // alert("11111122");
                var sContent2 = $("#s_content_2");
                var sXmancardNews = sContent2.find("#s_xmancard_news");
                // var waterContainer = sContent2.find(".water-container").find(".s-news-list-wrapper");
                var waterContainer = sContent2.find(".water-container");
                waterContainer.load("newsdiv.htm",function(responseTxt,statusTxt,xhr){
                    if(statusTxt=="success"){
                        // alert("外部内容加载成功!");
                        sXmancardNews.removeClass("s-news-split");
                        $(".s-more-bar").css({
                            "visibility": "hidden"
                        });

                        $("#bottom_container").css({
                            "display":"none"
                        });

                    }
                    if(statusTxt=="error")
                        alert("Error: "+xhr.status+": "+xhr.statusText);
                });

            }
        }
        if (scrollTop == 0) {  //滚动到头部部执行事件
            console.dir("我到头部了");

        }
    })



});

// $(document).ready(function () {
//     $(window).scroll(function () {
//         console.log("111111");
//         var scrollTop = $(this).scrollTop();
//         var scrollHeight = $(document).height();
//         var windowHeight = $(this).height();
//         // console.log(scrollTop,scrollHeight,windowHeight);
//
//         if (scrollTop + windowHeight == scrollHeight) {  //滚动到底部执行事件
//             console.log("我到底部了");
//             if ($("#s_content_2")){
//                 alert("11111122");
//             }
//         }
//         if (scrollTop == 0) {  //滚动到头部部执行事件
//             console.dir("我到头部了");
//
//         }
//     })
// });


// function SelectDiv(o){
//     var isCheck  =  $(o).attr("check") == undefined?false:true;
//     if(!isCheck){
//         //如果当前li并未选择
//         $(o).attr("check","true");
//         $(o).siblings().removeAttr("check");
//     }
//     else{
//         alert("这个li已经被选中了");
//     }
// }

// $(function(){
//     $("[id^=click_]").click( function () {
//         var id=$(this).attr("id").split("click_")[1];
//         alert(id);
//
//     });

// });