$(document).ready(function() {
    $('#cardframe').mixItUp();

    $(".button").click(function() {
        $('html,body').animate({
                scrollTop: $("#cardframe").offset().top - 60
            },
            'slow');
    });
    var navBar = $('#nav_bar');
    var navBarPosition = navBar.offset().top;
    $(window).scroll(function() {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > navBarPosition) {
            $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < navBarPosition) {
            $('#nav_bar').removeClass('navbar-fixed');
        }
    });

});