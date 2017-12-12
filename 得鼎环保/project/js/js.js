$(function () {
    /**页面切换**/
    var tittle = $(".tittle ul li");
    var page = $(".page");
    /**初始化**/
    function initial() {
        tittle.eq(0).addClass("on").siblings().removeClass("on");
        page.eq(0).show().siblings().hide();
    }
    initial();


    tittle.click(function () {
        index = $(this).index();
        tittle.eq(index).addClass("on").siblings().removeClass("on");
        page.eq(index).show().siblings().hide();
    });

    /**返回顶部**/
    var toTop = $('#top');
    toTop.click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 800);
    });
});