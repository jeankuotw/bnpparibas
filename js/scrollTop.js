$(document).ready(function() {

    $('.comment_icon').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $('#comments').offset().top
        }, 300);
    });

    $('.gotop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 2500);
    });


    $(window).on("scroll", function() {
        $(window).scrollTop() > 500 ? $(".share").addClass("in") : $(".share").removeClass("in")
    });

    $('.button-toggle').click(function(e) {
        e.preventDefault();
        $('.navbar-menu').toggleClass('active');
    });


    $('.navbtn').click(function(e) {
        e.preventDefault();
        $('.navbar-menu').toggleClass('active');
    });




    //smooth move to anchor link//
    //     $('.navbtn').click(function() {
    //         $('html, body').animate({
    //             scrollTop: $($(this).attr('href')).offset().top
    //         }, 900);
    //         return false;
    //     });

    // });

    $('.navbtn').click(function() {
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos - 10 }, 900);
        return false;
    });

});