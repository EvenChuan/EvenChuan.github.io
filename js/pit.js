$(function(){//点击分享下面的文章加载相应的模块
    $(".tuijian").find("a").unbind().click(function(e){
        e.preventDefault();
        $("#mainbody").find("#index_view").load($(this).attr("href"));
    });
});