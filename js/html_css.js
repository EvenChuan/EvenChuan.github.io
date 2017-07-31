$(function(){
    console.log(12);
    $(".tuijian").find("a").unbind().click(function(e){
        e.preventDefault();
        $("#mainbody").find("#index_view").load($(this).attr("href"));
    });
});