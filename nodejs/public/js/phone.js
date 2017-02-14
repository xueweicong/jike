/**
 * Created by xwc on 2016/12/25.
 */
$(document).ready(function () {
   //var fontnum = 3;
   $("nav li").each(function (index,item) {
       //console.log(item);
       if($(item).find("a").html().split('').length > 2){
           $(this).width("33.3333%");
       }
       else {
           $(this).width("16.6666%");
       }
   });

    refreshNews('推荐');

    var list = $('nav ul li');
    list.each(function (index,item) {
        // console.log(index,item);
        // console.log(typeof (item));
        // console.log(list.eq(index));
        // console.log(typeof (list.eq(index)));
        var listClass = list.eq(index).find('a').html();
        //console.log(listClass);
        list.eq(index).click(function () {
            refreshNews(listClass);
        })
    });
});

function refreshNews(type) {
    var newsListContainer = $("#newslist-container");
    newsListContainer.empty();
    $.ajax({
        url:'/news',
        type:'GET',
        dataType:'json',
        data:{newstype:type},
        success:function (data) {
            data.forEach(function (item) {
                //console.log(item);
                var i = 0;
                //var newsListContainer = $("#newslist-container");
                //newsListContainer.empty();
                var indexListIitemContainer = $("<div></div>").addClass("index-list-item-container").prependTo(newsListContainer);
                var indexListItem = $("<div></div>").addClass("index-list-item").appendTo(indexListIitemContainer);
                var indexListMain = $("<div></div>").addClass("index-list-main").appendTo(indexListItem);
                var indexListMainTitle = $("<div></div>").addClass("index-list-main-title").html(filterXSS(item.newstitle)).appendTo(indexListMain);
                var indexListAlbum = $("<div></div>").addClass("index-list-album").appendTo(indexListMain);

                while ( i < 3 ){
                    var indexListAlbumWrapper = $("<div></div>").addClass("index-list-album-wrapper").appendTo(indexListAlbum);
                    var img = $("<img>").attr("src", item.newsimg.split(',')[i]).appendTo(indexListAlbumWrapper);
                    //console.log(item.newsimg.split(',')[i]);
                    i++;
                }

                var indexListBottom = $("<div></div>").addClass("index-list-bottom").appendTo(indexListMain);
                var tipTime = $("<b></b>").addClass("tip-time").html(filterXSS(item.newstime.substring(0,16))).appendTo(indexListBottom);
            });
        },
        error:function () {
            console.log('ajax error');
        }

    });
    // var i = 3;
    // var newsListContainer = $("#newslist-container");
    // //newsListContainer.empty();
    // var indexListIitemContainer = $("<div></div>").addClass("index-list-item-container").prependTo(newsListContainer);
    // var indexListItem = $("<div></div>").addClass("index-list-item").appendTo(indexListIitemContainer);
    // var indexListMain = $("<div></div>").addClass("index-list-main").appendTo(indexListItem);
    // var indexListMainTitle = $("<div></div>").addClass("index-list-main-title").html("新闻标题").appendTo(indexListMain);
    // var indexListAlbum = $("<div></div>").addClass("index-list-album").appendTo(indexListMain);
    //
    // while ( i-- ){
    //     var indexListAlbumWrapper = $("<div></div>").addClass("index-list-album-wrapper").appendTo(indexListAlbum);
    //     var img = $("<img>").attr("src", "img/1.JPEG").appendTo(indexListAlbumWrapper);
    //
    // }
    //
    // var indexListBottom = $("<div></div>").addClass("index-list-bottom").appendTo(indexListMain);
    // var tipTime = $("<b></b>").addClass("tip-time").html("3分钟前").appendTo(indexListBottom);
}