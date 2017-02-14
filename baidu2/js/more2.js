/**
 * Created by xwc on 2016/11/25.
 */
$(document).ready(function () {
    $(".more").mouseover(function () {
        $(".lefthide").show();
    });
    // $(".more1").click(function () {
    //     $("a").toggle();
    // });

});
$(document).ready(function () {
    $(".lefthide").mouseleave(function () {
        $(".lefthide").hide();
    }) ;
});

$(document).ready(function(){
    $(".lefthide").hide();
});