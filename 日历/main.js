$(document).ready(
    function() {

        //获取当前时间
        var date = new Date();
        var _year = date.getFullYear();
        var _month = date.getMonth() + 1;
        var _day = date.getDate();
        var _week = date.getDay();

        //星期几判定
        function getWeek(val) {
            var _weekList = ["日", "一", "二", "三", "四", "五", "六"];
            return _weekList[val];
        }

        //创建日历模型

        //年月设置
        var calendar = $("#calendar");
        var _time = $("<div></div>").html(_year + "/" + _month + "/" + _day +
            "\n" + "星期" + getWeek(_week)).addClass("current-date");
        calendar.append(_time);
        var leftBtn = $("<span id='prevMonth'></span>").addClass("prev-month");
        var timeLine = $("<span></span>").html(_year + "年" + _month + "月").addClass("time-line");
        var rightBtn = $("<span id='nextMonth'></span>").addClass("next-month");
        var timeBar = $("<div id='timeBar'></div>").addClass("time-bar");
        timeBar.append(leftBtn, timeLine, rightBtn);
        calendar.append(timeBar);

        //日期显示部分
        var dateTable = $("<table></table>");
        dateTable.addClass("date-table");
        dateTable.append("<tr>" +
            "<th>日</th>" +
            "<th>一</th>" +
            "<th>二</th>" +
            "<th>三</th>" +
            "<th>四</th>" +
            "<th>五</th>" +
            "<th>六</th>" +
            "</tr>");
        for (i = 0; i < 6; i++) {
            var _line = $("<tr></tr>").html("<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>" +
                "<td></td>");
            dateTable.append(_line);
        }
        calendar.append(dateTable);

        //填入日历数字
        function showCal(yy, mm) {

            var _firstDay = new Date(yy, mm - 1, 1); //当前月第一天
            var _tds = $(".date-table td"); //日历总共格子数
            for (var i = 0; i < _tds.length; i++) {
                var _thisDay = new Date(yy, mm - 1, i + 1 - _firstDay.getDay());
                var _thisDayStr = getDayStr(_thisDay);
                _tds.eq(i).text(_thisDay.getDate());
                _tds.eq(i).attr("date", _thisDayStr);
                //判定日期是否与当前日期相同，设置class
                _tds.eq(i).removeClass(); //清除当前class
                if (_thisDayStr == getDayStr(new Date())) { // 当前天
                    _tds.eq(i).addClass('current-day');
                } else if (_thisDayStr.substr(0, 6) == getDayStr(_firstDay).substr(0, 6)) {
                    _tds.eq(i).addClass('current-month'); // 当前月
                } else { // 其他月
                    _tds.eq(i).addClass('other-month');
                }
            }
        }

        showCal(_year, _month); //正常时间显示


        //日期格式转换成字符串
        function getDayStr(date) {
            var _yy = date.getFullYear();
            var _mm = date.getMonth() + 1; // 月从0开始计数
            var _dd = date.getDate();
            _mm = (_mm > 9) ? ("" + _mm) : ("0" + _mm);
            _dd = (_dd > 9) ? ("" + _dd) : ("0" + _dd);
            return _yy + _mm + _dd;
        }

        //创建上下月按钮事件
        function setMonth(i) {
            _month = _month + i;
            if (_month > 12) {
                _month = 1;
                _year++;
            }
            if (_month < 1) {
                _month = 12;
                _year--;
            }
            showCal(_year, _month);
            timeLine.html(_year + "年" + _month + "月");
        }

        //绑定上下月按钮事件

        function bindEvent() {
            $("#prevMonth").bind("click", function() { setMonth(-1); });
            $("#nextMonth").bind("click", function() { setMonth(1); });
        }
        bindEvent();

    }
)