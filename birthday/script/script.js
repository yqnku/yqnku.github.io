$(function () {
    $("#music").hide();

    (function($) {
        $.fn.typewriter = function() {
            this.each(function() {
                var $ele = $(this), str = $ele.html(), progress = 0;
                $ele.html('');
                var timer = setInterval(function() {
                    var current = str.substr(progress, 1);
                    if (current == '<') {
                        progress = str.indexOf('>', progress) + 1;
                    } else {
                        progress++;
                    }
                    $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                    if (progress >= str.length) {
                        clearInterval(timer);
                    }
                }, 250);
            });
            return this;
        };
    })(jQuery);

    $("#greeting").click(function() {
        $("#card").fadeOut(0);
        sentences = [
            "生活的热闹和生命的骄傲，一个都不少，生日快乐。",
            "流水今日，明月前身不念不惧，永葆天真。",
            "祝你今天愉快，明天的愉快留给我明天祝福。",
            "一愿识尽天下好人，二愿读尽世间好书，三愿看尽世间好山水。",
            "愿你好好吃饭，好好休息，好好生活，愿你往后风平，柳暗花明，三分惊喜，七分尽兴。",
            "你且听这荒唐，春秋走来一步步，你且迷这风浪，永远二十赶朝暮，将昨日事，归欢喜处。",
            "希望你可以，像孩子一样快乐，像星星一样努力发光，像风一样自由。",
            "少女不惧年岁长，生日快乐。",
            "每过一岁旧布景倒退，但愿绝望和无奈远走高飞。",
            "新的一岁，与过去和解，对岁月温柔。",
            "愿你一生努力，一生被爱，想要的都拥有，得不到的都释怀。",
            "愿你有一个灿烂的前程，愿你有情人终成眷属，愿你在尘世获得幸福。",
            "生日是谁，它快不快乐有什么要紧的。 在这个世界上，我希望你是快乐的。",
            "今天是廖婷婷生日，大家把这条消息发到朋友圈就可以获得现金 100 元，我已经试过了，是假的，但我还是要祝她生日快乐。",
            "今天打开拼多多，邀请好友祝福廖婷婷生日快乐即可提现现金 100 元，还差 0.1%，快帮我助力吧。",
            "祝你不止生日快乐，以后每天快乐。",
            "不是只有生日快乐，一年里的所有日子，晴天、阴天、雪天，我都希望你快乐。",
            "惟愿你，常开心，常欣喜，有趣，有盼，无灾，无难。",
            "生日快乐，不是生日这天快乐，是到下一个生日之前的每一天都要快乐，然后继续下一个生日快乐。",
            "在你生日的这一天，将快乐的音符，作为礼物送给你，愿您拥有 365 个美丽的日子。",
            "每个生灵的诞生都给这个多彩的世界添加了一道颜色，而你是最亮丽的一笔。",
            "没有甜美的蛋糕，缤红的美酒，丰厚的礼物，悠扬的生日歌，不要遗憾，你拥有世界上最真心的祝福，生日快乐！",
            "愿你一生努力，一生被爱，想要的都拥有，得不到的都释怀，只愿你被这世界温柔相待。",
            "愿你夜里有灯，梦里有人，平安喜乐，得偿所愿。",
            "生日来临送祝愿，好运从此不间断，幸福之光照心田，吉祥如意一年年，四季平安在身边，财源滚滚每一天，如想愿望都实现，请你马上来连线，祝生日快乐！"
        ]
        $("#greeting-image").attr("src","images/" + Math.floor(Math.random() * 13) + ".jpg");
        $("#greeting-text").text(sentences[Math.floor(Math.random() * sentences.length)]);
        $("#card").fadeIn(2000);
    });

    $("#greeting").click();
            
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

    $('#open-birthday-page').click(function(){
        var today = new Date;
        var cur_month = today.getMonth();
        var cur_day = today.getDate();
        if (cur_month == 1 && cur_day == 28) {
            //
        }
        else {
            //$("#music").show();
            //$("#code").text("很早之前，从前从前，有个人爱你很久");
            //$("#code").typewriter();
            // alert('只有生日当天才能开启哦')
        }
    });

    
});