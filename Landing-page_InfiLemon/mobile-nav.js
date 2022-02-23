if (isTouch && isMobile) {
    $("#how_m").attr("href", "#how_");
    $("#pricing_m").attr("href", "#pricing_");
    $("#mobile-sidenav").css("top", getHeight());

    $("#open-menu-mobile").click(() => {
        $("#mobile-sidenav").toggle();
    });

    $(".nav-link").click(() => {
        $("#mobile-sidenav").hide();
    });
}

function getHeight() {
    var height = $("header").height();
    return height + "px";
}