$(function() {
    var sections = [],
        previousPos = 0,
        nextPos = 0,
        previousIndex = 0,
        nextIndex = 0;

    $("section").each(function() {
        var cl = $(this).attr("class").split(/\s+/)[0];
        var pos = $(this).offset().top;
        var el = {class: cl, pos: pos}
        sections.push(el);
    });

    nextPos = parseInt(sections[0].pos);
    nextIndex = 0;

    $(window).on("scroll", function() {
        var scroll = $(this).scrollTop() + 80;

        if (scroll <= previousPos) {
            $("section").removeClass("current");
            $("." + sections[previousIndex].class).addClass("current");
            nextPos = previousPos;
            nextIndex = previousIndex;
            if (typeof sections[previousIndex - 1] !== "undefined") {
                previousIndex--;
                previousPos = parseInt(sections[previousIndex].pos);
                $(".down-link i").html("keyboard_arrow_down");
            } else {
                previousPos = 0;
                $(".down-link i").html("keyboard_arrow_down");
            }
        } else if (scroll >= nextPos) {
            markNext();
        } else if (scroll - 80 + $(window).height() === $(document).height()) {
            markNext();
        } else if (scroll <= nextPos && previousPos === 0) {
            $("section").removeClass("current");
        }
    });

    var markNext = function()
    {
        $("section").removeClass("current");
        $("." + sections[nextIndex].class).addClass("current");
        previousPos = nextPos;
        previousIndex = nextIndex;
        if (typeof sections[nextIndex + 1] !== "undefined") {
            nextIndex++;
            nextPos = parseInt(sections[nextIndex].pos);
        } else {
            nextPos = $(document).innerHeight();
            $(".down-link i").html("keyboard_arrow_up");
        }
    }
});
