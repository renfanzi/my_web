$(function() {
    $("#m_nav ul li").hover(function() {
        $(this).children("div").stop(true, false).slideDown("fast");
    }, function() {
        $(this).children("div").stop(true, false).slideUp("fast");
    })
})