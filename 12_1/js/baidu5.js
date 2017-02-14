/*
采用了单例模式，因为类的对象只有一个，用不到工厂模式。进一步地可以采用闭包将属性方法封装起来。
这是我个人的看法：本次百度作业没有很大的必要用设计模式，因为这些代码都是用来控制css样式的，没有数据交互通信之类的，
所有按钮都可以封装在一个对象里，没有体现出设计模式的作用。而设计模式一般是对数据绑定通信这一块有很大便利性。例如我要定义的对象有很多他
不知道我这种想法对不对？
*/


var xwc = {};

var displayBlock = {
    init:function () {
        this.render();
        this.bind();
    },
    render:function () {
        var me = this;
        me.btns_bri = $(".s_bri");            //更多产品出现
        me.btnlefthide = $(".lefthide");     //更多产品消失
        /*设置和个人中心*/
        me.s_username_top = $("#s_username_top");
        me.s_user_name_menu = $("#s_user_name_menu");
        me.s_usersetting_top = $("#s_usersetting_top");
        me.s_user_setting_menu = $("#s_user_setting_menu");

        /*中间tab切换*/
        me.sMenuItem = $(".s-menu-item");
        me.sContent = $("#s_ctner_contents").find(".s-content");

        /*回顶部*/
        me.dingBu = $("#s_top_feed .to-top");

    },
    bind:function () {
        var me = this;
        me.btns_bri.mouseover(function () {
            me.btns_briFc();
        });
        me.btnlefthide.mouseleave(function () {
            me.btnlefthideFc();
        });
        me.s_username_top.mouseover(function () {
            me.s_username_topFc();
        });
        me.s_username_top.mouseleave(function () {
            me.s_user_name_menuFc();
        });
        me.s_user_name_menu.mouseover(function () {
            me.s_username_topFc();
        });
        me.s_user_name_menu.mouseleave(function () {
            me.s_user_name_menuFc();
        });
        me.s_usersetting_top.mouseover(function () {
            me.s_user_setting_menuFc();
        });
        me.s_usersetting_top.mouseleave(function () {
            me.s_user_setting_menuFc2();
        });
        me.s_user_setting_menu.mouseover(function () {
            me.s_user_setting_menuFc();
        });
        me.s_user_setting_menu.mouseleave(function () {
            me.s_user_setting_menuFc2();
        });

        /*中间tab切换*/
        me.sMenuItem.click(function () {
            me.sMenuItemFc(this);
            //console.log(this);
        });

        /*回顶部*/
        me.dingBu.hover(
            function () {
                $(this).addClass("icon-over");
            },
            function () {
                $(this).removeClass("icon-over");
            });
        me.dingBu.on("click",function () {
            $("body,html").animate({scrollTop:0},300);
        });
    },
    btns_briFc:function () {
        this.btnlefthide.css({
            "display":"block"
        })
    },
    btnlefthideFc:function () {
        this.btnlefthide.css({
            "display":"none"
        })
    },
    s_username_topFc:function () {
        this.s_user_name_menu.css({
            "display":"block"
        })
    },
    s_user_name_menuFc:function () {
        this.s_user_name_menu.css({
            "display":"none"
        })
    },
    s_user_setting_menuFc:function () {
        this.s_user_setting_menu.css({
            "display":"block"
        })
    },
    s_user_setting_menuFc2:function () {
        this.s_user_setting_menu.css({
            "display":"none"
        })
    },

    /**/
    sMenuItemFc:function (clickbtn) {
        //console.log(this.sMenuItem);
        $(clickbtn).addClass("current").siblings().removeClass("current");
        var i = null;
        if ($(clickbtn).attr("data-id") == "100"){
            // sContent.each().attr("id") == "s_content_100"
            for (i = 0; i < this.sContent.length; i++){
                if (this.sContent.eq(i).attr("id") == "s_content_100"){
                    console.log(i);
                    this.sContent.eq(i).css({
                        "display":"block"
                    }).siblings().css({
                        "display":"none"
                    })
                }
            }
            // $(".s-opacity-white-background")
            this.sMenuItem.not("#s_menu_mine").removeClass("current");
        }else if($(clickbtn).attr("data-id") == "1"){
            for (i = 0; i < this.sContent.length; i++){
                if (this.sContent.eq(i).attr("id") == "s_content_1"){
                    console.log(i);
                    this.sContent.eq(i).css({
                        "display":"block"
                    }).siblings().css({
                        "display":"none"
                    })
                }
            }
            $("#s_menu_mine").removeClass("current");
        }else {
            for (i = 0; i < this.sContent.length; i++){
                if (this.sContent.eq(i).attr("id") == "s_content_2"){
                    console.log(i);
                    this.sContent.eq(i).css({
                        "display":"block"
                    }).siblings().css({
                        "display":"none"
                    })
                }
            }
            $("#s_menu_mine").removeClass("current");
        }

    }

};

$(document).ready(function () {
    displayBlock.init();

});


















/*右边栏*/
$(document).ready(function () {
    // $(".s_bri").mouseover(function () {
    //     $(".lefthide").css({
    //         "display":"block"
    //     })
    // });
    // $(".lefthide").mouseleave(function () {
    //     $(".lefthide").css({
    //         "display":"none"
    //     })
    // });
    /*设置和个人中心*/
    // $("#s_username_top").mouseover(function () {
    //     $("#s_user_name_menu").css({
    //         "display":"block"
    //     })
    // });
    // $("#s_user_name_menu").mouseover(function () {
    //     $("#s_user_name_menu").css({
    //         "display":"block"
    //     })
    // });
    // $("#s_username_top").mouseleave(function () {
    //     $("#s_user_name_menu").css({
    //         "display":"none"
    //     })
    // });
    // $("#s_user_name_menu").mouseleave(function () {
    //     $("#s_user_name_menu").css({
    //         "display":"none"
    //     })
    // });
    // $("#s_usersetting_top").mouseover(function () {
    //     $("#s_user_setting_menu").css({
    //         "display":"block"
    //     })
    // });
    // $("#s_user_setting_menu").mouseover(function () {
    //     $("#s_user_setting_menu").css({
    //         "display":"block"
    //     })
    // });
    // $("#s_usersetting_top").mouseleave(function () {
    //     $("#s_user_setting_menu").css({
    //         "display":"none"
    //     })
    // });
    // $("#s_user_setting_menu").mouseleave(function () {
    //     $("#s_user_setting_menu").css({
    //         "display":"none"
    //     })
    // });

    /*中间tab切换*/
    // var sMenuMine = $("#s_menu_mine");

    var sMenuItem = $(".s-menu-item");
    // console.log(sMenuItem);
    // var sContent = $("#s_ctner_contents").find(".s-content");
    // //var i = 0;
    // console.log(sMenuItem.length);
    // sMenuItem.click(function () {
    //     console.log($(this));
    //     console.log(this);
    //     $(this).addClass("current").siblings().removeClass("current");
    //     if ($(this).attr("data-id") == "100"){
    //         // sContent.each().attr("id") == "s_content_100"
    //         for (i in sContent){
    //             if (sContent.eq(i).attr("id") == "s_content_100"){
    //                 sContent.eq(i).css({
    //                     "display":"block"
    //                 }).siblings().css({
    //                     "display":"none"
    //                 })
    //             }
    //         }
    //         // $(".s-opacity-white-background")
    //         sMenuItem.not("#s_menu_mine").removeClass("current");
    //     }else if($(this).attr("data-id") == "1"){
    //         for (i in sContent){
    //             if (sContent.eq(i).attr("id") == "s_content_1"){
    //                 sContent.eq(i).css({
    //                     "display":"block"
    //                 }).siblings().css({
    //                     "display":"none"
    //                 })
    //             }
    //         }
    //         $("#s_menu_mine").removeClass("current");
    //     }else {
    //         for (i in sContent){
    //             if (sContent.eq(i).attr("id") == "s_content_2"){
    //                 sContent.eq(i).css({
    //                     "display":"block"
    //                 }).siblings().css({
    //                     "display":"none"
    //                 })
    //             }
    //         }
    //         $("#s_menu_mine").removeClass("current");
    //     }
    //
    // });

    /*回顶部*/
    // var dingBu = $("#s_top_feed .to-top");
    // dingBu.hover(function () {
    //         dingBu.addClass("icon-over");
    //     },
    //     function () {
    //         dingBu.removeClass("icon-over");
    //     });
    // dingBu.on("click",function () {
    //     $("body,html").animate({scrollTop:0},300);
    // });

    /*下拉*/
    $(window).scroll(function () {
        //console.log("111111");
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        // console.log(scrollTop,scrollHeight,windowHeight);
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
            $(".s-news-rank-wrapper").css({
                "position": "fixed",
                "top": "104px",
                "right": (width - 895) / 2 + 5
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
            if (scrollTop >= $(window).height()*0.382){
                var width2 = $(window).width();
                $(".s-news-rank-wrapper").css({
                    "right": (width2-895)/2 + 5
                });
            }
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
                // waterContainer.last().load("newsdiv.htm",function(responseTxt,statusTxt,xhr){
                    if(statusTxt=="success"){
                        // alert("外部内容加载成功!");
                        sXmancardNews.removeClass("s-news-split");
                        $(".s-more-bar").css({
                            "visibility": "hidden"
                        });
                        $("#s_top_feed .to-top").css({
                            "visibility": "visible"
                        });
                        $("#bottom_container").css({
                            "display":"none"
                        });
                        // var width = $(window).width();
                        // var height = $(window).height();
                        // if (scrollTop >= height*0.38) {
                        //     console.log($(window).height());
                        //     $(".s-news-rank-wrapper").css({
                        //         "position": "fixed",
                        //         "top": "104px",
                        //         "right": (width - 895) / 2 + 5
                        //     });
                        // }
                        // $(function () {
                        //     var width = $(window).width();
                        //     $(".s-news-rank-wrapper").css({
                        //         "right": (width-895)/2 + 25
                        //     });
                        // });

                        // $(window).resize(function () {
                        //     if (scrollTop >= $(window).height()*0.38){
                        //         var width2 = $(window).width();
                        //         $(".s-news-rank-wrapper").css({
                        //             "right": (width2-895)/2 + 5
                        //         });
                        //     }
                        // });


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