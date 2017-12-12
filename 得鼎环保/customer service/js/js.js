$(function () {
  /**返回顶部**/
  var toTop = $('#top');
  toTop.click(function () {
    $('html,body').animate({
      scrollTop: '0px'
    }, 800);
  });
});
/**提交请求**/
$(function () {
  var form = $("#form");
  var name = $("#name");
  var company = $("#company");
  var qq = $("#qq");
  var wechat = $("#wechat");
  var tel = $("#tel");
  var code = $("#code");
  var need = $("#need");
  var send = $("#send");

  name.blur(
    function () {
      if ($("#name").val() == "") {
        alert("请输入您的名字");
      }
    }
  );
  company.blur(
    function () {
      if ($("#company").val() == "") {
        alert("请输入您所代表的企业或组织");
      }
    }
  );
  qq.blur(
    function () {
      if ($("#qq").val() == "" || wechat.val() == "" || tel.val() == "") {
        alert("请输入您所代表的企业或组您的联系方式");
      }
    }
  );
  wechat.blur(
    function () {
      if ($("#qq").val() == "" || wechat.val() == "" || tel.val() == "") {
        alert("请输入您所代表的企业或组您的联系方式");
      }
    }
  );
  tel.blur(
    function () {
      if ($("#qq").val() == "" || wechat.val() == "" || tel.val() == "") {
        alert("请输入您所代表的企业或组您的联系方式");
      }
    }
  );
  code.blur(
    function () {
      if ($("#code").val() == "") {
        alert("请输入验证码");
      }
    }
  );
  need.blur(
    function () {
      if ($("#need").val() == "") {
        alert("请输入您的需求");
      }
    }
  );
  send.click(function () {
    form.submit(function () {
      $(this).ajaxSubmit({
        type: 'post',
        url: '[formurl]',
        dataType: "json",
        date: {
          'name': name,
          'company': company,
          'qq': qq,
          'wechat': wechat,
          'tel': tel,
          'need': need
        },
        success: function () {
          alert("发送成功！");
        },
        error: function () {
          console.log("error:" + data.responseText);
        }
      })
    });
  })
});