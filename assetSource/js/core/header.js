$(function() {
    $(window).on("scroll", function () {
        var self = $(this);
        if (self.scrollTop() > 500) {
            $("header").addClass("pipnav");
        } else {
            $("header").removeClass("pipnav");
        }
    });

    $(".down-link").on("click", function() {
        var curr = $("section.current").next();
        if (curr.length === 0) {
            curr = $("section").first();
        }

        $("section").removeClass("current");
        curr.addClass("current");

        $('html, body').animate({
            scrollTop: curr.offset().top - 80
        }, 1000);
    });
});
