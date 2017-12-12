$(function () {
  /**返回顶部**/
  var toTop = $('#top');
  toTop.click(function () {
    $('html,body').animate({
      scrollTop: '0px'
    }, 800);
  });
});
$(
  function () {
    /**tab选项卡**/
    var tab = $(".tab ul li");
    var page = $(".page");

    function initial() {
      tab.eq(0).addClass("on").siblings().removeClass("on");
      page.eq(0).show().siblings().hide();
    }
    initial();


    tab.click(function () {
      index = $(this).index();
      tab.eq(index).addClass("on").siblings().removeClass("on");
      page.eq(index).show().siblings().hide();
    });
  }
);