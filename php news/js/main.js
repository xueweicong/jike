/**
 * Created by xwc on 2016/12/27.
 */
//打开后刷新新闻列表
$(document).ready(function () {
    var newsTable = $("#newstable tbody");
    
   refreshNews();

   //添加新闻
    $('#btnsubmit').click(function (e) {
        e.preventDefault();
        //输入判断
        // if ($("#newstitle").val()===''){
        //
        // }
        var jsonNews = {
            newstitle:$('#newstitle').val(),
            newstype:$('#newstype').val(),
            newsimg:$('#newsimg').val(),
            newstime:$('#newstime').val(),
            newssrc:$('#newsurl').val()
        };
        console.log(jsonNews.newsimg);

        //提交添加
        $.ajax({
            url:'./server/insertnews.php',
            type:'post',
            data:jsonNews,
            dataType:'html',
            success:function (data) {
                console.log(data);
                refreshNews();
            },
            error:function () {
                console.log('errorrrrr')
            }
        });
        $("#mainleft input").val('');
        //$("textarea").val('');
    });

    //删除新闻功能
    var deleteId = null;
    newsTable.on('click', '.btn-danger', function (e) {
       $('#deleteModal').modal('show');
       //console.log($(this).parent().prevAll().eq(5).html());
        deleteId = $(this).parent().prevAll().eq(5).html();
    });
    $('#deleteModal #confirmDelete').click(function (e) {
        if(deleteId){
            $.ajax({
                url:'./server/deleteNews.php',
                type:'post',
                data:{newsid:deleteId},
                dataType:'html',
                success:function (data) {
                    console.log(data);
                    $('#deleteModal').modal('hide');
                    refreshNews();
                },
                error:function () {
                    console.log("删除失败");
                }
            });
        }
    });

    //修改新闻功能
    var updateId = null;
    newsTable.on('click', '.btn-primary', function (e) {
        $('#updateModal').modal('show');
        //console.log($(this).parent().prevAll().eq(5).html());
        updateId = $(this).parent().prevAll().eq(5).html();
        $.ajax({
            url:'./server/changenews.php',
            type:'post',
            dataType:"json",
            data:{newsid:updateId},
            success:function (data) {
                console.log(data);
                $('#upnewstitle').val(data[0].newstitle);
                $('#upnewstype').val(data[0].newstype);
                $('#upnewsimg').val(data[0].newsimg);
                $('#upnewsurl').val(data[0].newssrc);
                //var uptime = data[0].newstime.split(' ')[0];
                var uptime = data[0].newstime.substring(0,16).replace(' ','T');

                console.log(uptime);
                $('#upnewstime').val(uptime);

            },
            error:function () {
                console.log("22435346");
            }
        })
    });
    $('#updateModal #confirmUpdate').click(function (e) {
        $.ajax({
            url:'./server/updatenews.php',
            type:'post',
            dataType:'html',
            data:{
                newstitle:$('#upnewstitle').val(),
                newstype:$('#upnewstype').val(),
                newsimg:$('#upnewsimg').val(),
                newstime:$('#upnewstime').val(),
                newssrc:$('#upnewsurl').val(),
                id:updateId
            },
            success:function (data) {
                $('#updateModal').modal('hide');
                refreshNews();
            },
            error:function () {
                console.log("22435346675");
            }
        })
    });


    function refreshNews() {
        newsTable.empty();
        $.ajax({
            type:'get',
            url:'./server/getnews.php',
            data:{newstype:'推荐'},
            dataType:'json',
            success:function (data) {
                console.log(data);
                data.forEach(function (item) {
                    // console.log(index);
                    //console.log(item.id);
                    var tdid = $("<td>").html(item.id);
                    var tdtype = $("<td>").html(item.newstype);
                    var tdtitle = $("<td>").html(item.newstitle);
                    var tdimg = $("<td>").html(item.newsimg);
                    var tdsrc = $("<td>").html(item.newssrc);
                    var tdtime = $("<td>").html(item.newstime);
                    var tdctrl = $("<td>");
                    var btnchange = $("<button>").addClass('btn btn-primary btn-xs').html("编辑");
                    var btndelete = $("<button>").addClass('btn btn-danger btn-xs').html("删除");
                    tdctrl.append(btnchange, btndelete);
                    var trow = $("<tr>");
                    trow.append(tdid, tdtype, tdtitle, tdimg, tdsrc, tdtime, tdctrl);
                    newsTable.prepend(trow);
                    //console.log(25525);
                })
            },
            error:function () {
                console.log('ajax error');
            }
        })
    }
   
});


