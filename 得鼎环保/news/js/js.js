$(function () {
    

    
        /**返回顶部**/
        var toTop = $('#top');
        toTop.click(function () {
            $('html,body').animate({
                scrollTop: '0px'
            }, 800);
        });
    });