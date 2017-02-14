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
            url:'/main/insertnews',
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
                url:'/main/deletenews',
                type:'get',
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
            url:'/main/compilenews',
            type:'get',
            dataType:"json",
            data:{newsid:updateId},
            success:function (data) {
                data.forEach(function (item) {
                    console.log(item.newstitle);
                    $('#upnewstitle').val(filterXSS(item.newstitle));
                    $('#upnewstype').val(filterXSS(item.newstype));
                    $('#upnewsimg').val(filterXSS(item.newsimg));
                    $('#upnewsurl').val(filterXSS(item.newssrc));
                    //var uptime = data[0].newstime.split(' ')[0];
                    var uptime = item.newstime.substring(0,16).replace(' ','T');

                    console.log(uptime);
                    $('#upnewstime').val(filterXSS(uptime));
                });
                // console.log(filterXSS(data[0].newstitle));
                // $('#upnewstitle').val((data[0].newstitle));
                // $('#upnewstype').val(filterXSS(data[0].newstype));
                // $('#upnewsimg').val(filterXSS(data[0].newsimg));
                // $('#upnewsurl').val(filterXSS(data[0].newssrc));
                // //var uptime = data[0].newstime.split(' ')[0];
                // var uptime = data[0].newstime.substring(0,16).replace(' ','T');
                //
                // console.log(uptime);
                // $('#upnewstime').val(filterXSS(uptime));

            },
            error:function () {
                console.log("22435346");
            }
        })
    });
    $('#updateModal #confirmUpdate').click(function (e) {
        $.ajax({
            url:'/main/updatenews',
            type:'post',
            dataType:'html',
            data:{
                newstitle:filterXSS($('#upnewstitle').val()),
                newstype:filterXSS($('#upnewstype').val()),
                newsimg:filterXSS($('#upnewsimg').val()),
                newstime:filterXSS($('#upnewstime').val()),
                newssrc:filterXSS($('#upnewsurl').val()),
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
            url:'/main/getnews',
            //data:{newstype:'推荐'},
            dataType:'json',
            success:function (data) {
                console.log(data);
                data.forEach(function (item) {
                    // console.log(index);
                    //console.log(item.id);
                    var tdid = $("<td>").html(item.id);
                    var tdtype = $("<td>").html(filterXSS(item.newstype));
                    var tdtitle = $("<td>").html(filterXSS(item.newstitle));
                    var tdimg = $("<td>").html(filterXSS(item.newsimg));
                    var tdsrc = $("<td>").html(filterXSS(item.newssrc));
                    var tdtime = $("<td>").html(filterXSS(item.newstime.substring(0,16).replace('T',' ')));
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


