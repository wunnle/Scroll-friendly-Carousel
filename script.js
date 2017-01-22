$(function() {
    $(".slider li").css("background-image", "url(" + $(this).find("img").attr("src") + ")")

    let slideW = 200;
    let slideM = 8;
    let slideTW = slideW + slideM * 2;
    let autoscrolled;

    $(".slider").scroll(function() {
        if (!autoscrolled) {
            let scrollPos = $(this).scrollLeft();
            let scrollMod = scrollPos % slideTW;
            var scrollTimes = Math.floor((scrollPos - slideTW / 2) / slideTW) + 1;

            clearTimeout($.data(this, 'scrollTimer'));
            $.data(this, 'scrollTimer', setTimeout(function() {
                autoscrolled = true;
                $(".slider").animate({
                    scrollLeft: scrollTimes * slideTW + "px"
                }, {
                    duration: 300
                });
                setTimeout(function() {
                    autoscrolled = false;
                }, 400)
            }, 300));
        }
    })
});
