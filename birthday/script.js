$(function () {
    $("#greeting").click(function() {
        sentences = [
            "生活的热闹和生命的骄傲，一个都不少，生日快乐",
            "你成为了我的小众喜好，藏着欣喜不已，炫耀时格外骄傲",
            "流水今日，明月前身不念不惧，永葆天真",
            "祝你今天愉快，明天的愉快留给我明天祝福",
            "一愿识尽天下好人，二愿读尽世间好书，三愿看尽世间好山水",
            "愿你好好吃饭，好好休息，好好生活，愿你往后风平，柳暗花明，三分惊喜，七分尽兴",
            "生日快乐，星星是银河递给月亮的情书，你是世界赠与我的恩赐",
            "愿你有好运气，如果没有，愿你在不幸中学会慈悲；愿你被很多人爱，如果没有，愿你在寂寞中学会宽容。愿你每天都能睡到自然醒",
            "你且听这荒唐，春秋走来一步步，你且迷这风浪，永远二十赶朝暮，将昨日事，归欢喜处",
            "希望你可以，像孩子一样快乐，像星星一样努力发光，像风一样自由",
            "少女不惧年岁长，生日快乐",
            "每过一岁旧布景倒退，但愿绝望和无奈远走高飞",
            "新的一岁，与过去和解，对岁月温柔",
            "愿你一生努力，一生被爱，想要的都拥有，得不到的都释怀",
            "愿你有一个灿烂的前程，愿你有情人终成眷属，愿你在尘世获得幸福"
        ]
        $("#greeting-text").text(sentences[Math.floor(Math.random() * sentences.length)]);
    });

            
    function timeElapse(){
        var today = new Date;
        var cur_year = today.getFullYear();
        var cur_month = today.getMonth();
        var cur_day = today.getDate();
        if (cur_month == 1 && cur_day == 28) {
            $("#elapseClock").html(
                "祝你生日快乐！！！"
            );
        }
        else {
            if (cur_month > 1 || (cur_month == 1 && cur_day > 28)) {
                cur_year += 1;
            }
            var birthday = new Date;
            birthday.setFullYear(cur_year, 1, 28);
            birthday.setHours(0);
            birthday.setMinutes(0);
            birthday.setSeconds(0);
            birthday.setMilliseconds(0);
            var seconds = (Date.parse(birthday) - Date.parse(today)) / 1000;

            var days = Math.floor(seconds / (3600 * 24));
            seconds = seconds % (3600 * 24);
            var hours = Math.floor(seconds / 3600);
            seconds = seconds % 3600;
            var minutes = Math.floor(seconds / 60);
            seconds = seconds % 60;
            $("#elapseClock").html(
                "距离你的 " + (cur_year-1999) + " 岁生日还有<br/>" + 
                "<span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 时 <span class=\"digit\">" + minutes + "</span> 分 <span class=\"digit\">" + seconds + "</span> 秒"
            );
        }
    }

    timeElapse();
    setInterval(function () {
        timeElapse();
    }, 500);
});