$(document).ready(function(){$(".s_bri").mouseover(function(){$(".lefthide").css({display:"block"})}),$(".lefthide").mouseleave(function(){$(".lefthide").css({display:"none"})}),$("#s_username_top").mouseover(function(){$("#s_user_name_menu").css({display:"block"})}),$("#s_user_name_menu").mouseover(function(){$("#s_user_name_menu").css({display:"block"})}),$("#s_username_top").mouseleave(function(){$("#s_user_name_menu").css({display:"none"})}),$("#s_user_name_menu").mouseleave(function(){$("#s_user_name_menu").css({display:"none"})}),$("#s_usersetting_top").mouseover(function(){$("#s_user_setting_menu").css({display:"block"})}),$("#s_user_setting_menu").mouseover(function(){$("#s_user_setting_menu").css({display:"block"})}),$("#s_usersetting_top").mouseleave(function(){$("#s_user_setting_menu").css({display:"none"})}),$("#s_user_setting_menu").mouseleave(function(){$("#s_user_setting_menu").css({display:"none"})});var s=$(".s-menu-item");console.log(s);var e=$("#s_ctner_contents").find(".s-content"),n=0;console.log(s.length),s.click(function(){if($(this).addClass("current").siblings().removeClass("current"),"100"==$(this).attr("data-id")){for(n=0;n<e.length;n++)"s_content_100"==e.eq(n).attr("id")&&e.eq(n).css({display:"block"}).siblings().css({display:"none"});s.not("#s_menu_mine").removeClass("current")}else if("1"==$(this).attr("data-id")){for(n=0;n<e.length;n++)"s_content_1"==e.eq(n).attr("id")&&e.eq(n).css({display:"block"}).siblings().css({display:"none"});$("#s_menu_mine").removeClass("current")}else{for(n=0;n<e.length;n++)"s_content_2"==e.eq(n).attr("id")&&e.eq(n).css({display:"block"}).siblings().css({display:"none"});$("#s_menu_mine").removeClass("current")}});var o=$("#s_top_feed .to-top");o.hover(function(){o.addClass("icon-over")},function(){o.removeClass("icon-over")}),o.on("click",function(){$("body,html").animate({scrollTop:0},300)}),$(window).scroll(function(){var e=$(this).scrollTop(),n=$(document).height(),i=$(this).height();o.css(0==e?{visibility:"hidden"}:{visibility:"visible"}),e>=250?($("#head").addClass("s_down"),$("#head_wrapper").addClass("s-down"),$("#s_top_wrap").addClass("s-down"),$("#head_wrapper2").css({display:"block"})):($("#head").removeClass("s_down"),$("#head_wrapper").removeClass("s-down"),$("#s_top_wrap").removeClass("s-down"),$("#head_wrapper2").css({display:"none"}));var t=$(window).width();if($(".s-news-rank-wrapper").css(e>=.382*$(window).height()?{position:"fixed",top:"104px",right:(t-895)/2}:{position:"absolute",top:"0px",right:5}),$(window).resize(function(){if(e>=.382*$(window).height()){var s=$(window).width();console.log(s),$(".s-news-rank-wrapper").css({right:(s-895)/2})}}),e+i==n&&(console.log("我到底部了"),s.eq(1).hasClass("current"))){var r=$("#s_content_2"),a=r.find("#s_xmancard_news"),l=r.find(".water-container"),c=l.html();l.load("newsdiv.htm",function(s,e,n){"success"==e&&(l.html(c+l.html()),a.removeClass("s-news-split"),$(".s-more-bar").css({visibility:"hidden"}),$("#bottom_container").css({display:"none"})),"error"==e&&alert("Error: "+n.status+": "+n.statusText)})}0==e&&console.dir("我到头部了")})});