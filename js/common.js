$(function () {
    $("header").load("header.html", function () {
        $("footer").load("footer.html", function () {
        });
    });
    (!$(".ico").length) && $("head").append('<link class="ico" rel="icon" href="images/jicon.ico"/>')
});