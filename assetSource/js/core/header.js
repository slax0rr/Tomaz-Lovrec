$(function() {
    /**
     * Add "pipnav" class to header when scrolled passt 500px
     */
    $(window).on("scroll", function() {
        var self = $(this);
        if (self.scrollTop() > 500) {
            $("header").addClass("pipnav");
        } else {
            $("header").removeClass("pipnav");
        }
    });

    /**
     * Handle the down navigation
     */
    $(".down-link").on("click", function() {
        var curr = $("section.current").next("section");
        if (curr.length === 0) {
            curr = $("section").first();
        }

        $('html, body').animate({
            scrollTop: curr.offset().top - 80
        }, 1000);
    });
});
