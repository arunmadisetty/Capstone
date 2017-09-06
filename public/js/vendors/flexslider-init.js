jQuery(window).on('load', function() {

    //Flexslider 1
    $('.flexslider-1').flexslider({
        animation: "fade",
        slideshow: true,
        slideshowSpeed: 5000,
        controlNav: true,
        directionNav: true
    });
    
    //Flexslider 2
    $('.flexslider-2').flexslider({
        animation: "slide",
        slideshow: true,
        slideshowSpeed: 5000,
        controlNav: true,
        directionNav: true
    });

    homeHeight();

});


jQuery(window).on('resize', function() {
    homeHeight();
});

jQuery(document).on('ready', function() {
    homeHeight();
});

function homeHeight() {
    var wh = jQuery(window).height();
    jQuery('.flexslider, .flexslider .slides li.slide').css('height', wh);
}

$('.flexslider .slides li.slide').css('background-image', function() {
    var bg = 'url(' + $(this).data('background') + ')';
    return bg;
});

var page_title = $('body');
var hero = page_title.find('.flexslider-2');
if (hero.length > 0) var hero_top = hero.offset().top;
$(window).on('scroll', function() {
    var current_top = $(document).scrollTop();
    var hero_height = $('.flexslider-2').height();
    hero.css('top', (current_top * 0.50));
    hero.css('opacity', (1 - current_top / hero_height * 1.2));
});