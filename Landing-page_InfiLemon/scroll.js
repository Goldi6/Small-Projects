//////////////////////////////////////////////////////////////

var sections = $("section");

$("document").ready(function() {
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();

        for (var i = 0; i < sections.length; i++) {
            var $section = $(sections[i]);
            if (scroll >= $section.offset().top) {
                // Will change URL without reloading, affecting the history
                history.replaceState(
                    "data",
                    "title",
                    location.origin + location.pathname + "#" + $section.attr("id")
                );
            }
        }
    });
});