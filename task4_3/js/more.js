/**
 * Created by xwc on 2016/11/20.
 */
$(document).ready(function () {
    $(".blue").mouseover(function () {
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
