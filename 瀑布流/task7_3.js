/**
 * Created by xwc on 2016/12/24.
 */
$(document).ready(function() {
    $(window).on("load", function () {
        imgLocation();
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]};
        $(window).scroll(function () {
            if(scrollSide()){
                $.each(dataImg.data, function (index, value) {
                    //console.log(index,value);
                    var box = $("<li>").appendTo($("ul"));
                    //console.log(box);
                    var content = $("<div>").addClass("content").appendTo(box);
                    //console.log(content);
                    $("<img>").attr("src","./img/" + $(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        });
    });
});

function scrollSide() {
    var box = $("li");
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    //console.log(lastBoxHeight,documentHeight,scrollHeight);
    return (lastBoxHeight < scrollHeight + documentHeight) ? true:false;
}

function imgLocation() {
    var box = $("li");
    var boxWidth = box.eq(0).width();
    var num =  Math.floor($(".wrapper").width()/boxWidth);
    var boxArr = [];
    box.each(function (index,value) {
        //console.log(index,value);
        var boxHeight = box.eq(index).height();
        if(index < num){
            boxArr[index] = boxHeight;
            //console.log(boxHeight);
        }else {
            var minBoxHeight = Math.min.apply(null,boxArr);
            //console.log(minBoxHeight);
            var minBoxIndex = $.inArray(minBoxHeight,boxArr);
            //console.log(minBoxIndex);
            //console.log(value);
            $(value).css({
                "position":"absolute",
                "top":minBoxHeight,
                "left":box.eq(minBoxIndex).position().left
            });
            boxArr[minBoxIndex] += box.eq(index).height();
        }
    });
}