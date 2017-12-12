$(function () {

    /**banner**/
    var banner = $('#banner');
    var list = $('#banner-list');
    var unit = $(".banner-unit");
    var btns = $('#banner-btns span');
    var index = 1; //当前页数
    var interval = 3000; //动画事件间隔
    var timer; //计时器

    /**初始化**/
    function initial() {
        unit.hide().eq(0).show();
        btns.eq(index - 1).addClass('on');
    }
    initial();

    /**切换动画**/
    function animate(index) {
        unit.eq(index - 1).fadeIn(1000).siblings().fadeOut(1000);
        btns.eq(index - 1).addClass('on').siblings().removeClass('on');
    }

    /**下一页**/
    function next() {
        animate(index);
        index++;
        if (index > 5) {
            index = 1;
        }
    }

    /**播放动画**/
    function play() {
        timer = setTimeout(function () {
            next();
            play();
        }, interval);
    }

    /**停止动画**/
    function stop() {
        clearTimeout(timer);
    }

    /**轮播图按钮绑定事件**/
    btns.each(function () {
        $(this).click(function () {
            var myIndex = parseInt($(this).attr('index'));
            animate(myIndex);
            index = myIndex;
        })
    });

    banner.hover(stop, play); //指针在banner区域停止播放

    play(); //载入自动播放
    /**check form**/
    // $('#name').blur(
    //     function () {
    //         if ($('#name').val() == "") {
    //             alert('请输入您的名称！');
    //         }
    //     }
    // )
    // $('#company').blur(
    //     function () {
    //         if ($('#company').val() == "") {
    //             alert('请输入您所代表的公司的名称！');
    //         }
    //     }
    // )
    // $('#tel').blur(
    //     function () {
    //         if ($('#tel').val() == "") {
    //             alert('请输入您的联系方式！');
    //         }
    //     }
    // )
    // $('#require').blur(
    //     function () {
    //         if ($('#require').val() == "") {
    //             alert('请输入您的需求！');
    //         }
    //     }
    // )
    // /**form提交**/
    // $("#sent").click(function () {
    //     $('form').submit(function () {
    //         var name = $('#name').val();
    //         var company = $('#company').val();
    //         var tel = $('#tel').val();
    //         var require = $("#require").val();
    //         $(this).ajaxSubmit({
    //             type: 'post', // 提交方式 get/post
    //             url: '[formurl]', //TODO:需求表单  需要提交的 url
    //             data: {
    //                 'name': name,
    //                 'company': company,
    //                 'tel': tel,
    //                 'require': require
    //             },
    //             success: function (data) { // data 保存提交后返回的数据，一般为 json 数据
    //                 // 此处可对 data 作相关处理
    //                 alert('提交成功！');
    //             }
    //         });
    //         return false;
    //     });
    // });
    /**s4-tab**/
    var s5Tittle = $('.tab-t div');
    var s5Index;
    var s5Content = $('.tab-c').children();
    s5Content.hide().eq(0).show();
    for (var i = 0; i < s5Tittle.length; i++) {
        s5Tittle.eq(i).click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            s5Index = $(s5Tittle).index(this);
            s5Content.eq(s5Index).show().siblings().hide();
        });

    };
    // /**aside**/
    // var aside = $('#aside');
    // var aside1 = $('#aside1');
    // var aside2 = $('#aside2');
    // aside2.hide();
    // aside.mouseenter(function () {
    //     aside1.hide();
    //     aside2.show();
    // });
    // aside.mouseleave(function () {
    //     aside2.hide();
    //     aside1.show();
    // });
    /**返回顶部**/
    var toTop = $('#top');
    toTop.click(function () {
        $('html,body').animate({
            scrollTop: '0px'
        }, 800);
    });
});