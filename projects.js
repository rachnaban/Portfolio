$(document).ready(function() {
    $('.toggleNav').on('click', function() {
        $('nav ul').toggleClass('open');
    });

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");
        $('a').each(function() {
            $(this).parent().removeClass('active');
        })
        $(this).parent().addClass('active');
        var target = this.hash;
        $target = $(target);
        if (target !== "") {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function() {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        }
    });
});

function onScroll(event) {
    var scrollPosition = $(document).scrollTop();


    $('nav li a').each(function() {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            currentLink.parent().addClass("active").siblings().removeClass("active");
            return;
        } else {
            currentLink.parent().removeClass("active");
        }

    });

    if (document.body.scrollHeight == document.body.scrollTop +
        window.innerHeight) {
        //bottom of page
        $('nav li a').each(function() {
            $(this).parent().removeClass('active');
        });
        $("nav ul li:last-child").addClass('active');
    }
    if ($(document).scrollTop() == 0 || $(document).scrollTop() <= $("#aboutme").outerHeight()) {
        //top of page
        $('nav li a').each(function() {
            $(this).parent().removeClass('active');
        });
        $("nav ul li:first-child").addClass('active');
    }
}
