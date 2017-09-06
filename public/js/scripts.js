jQuery(function($) {
    "use strict";

    //Preloader
    $(window).on('load', function() {
        $('body').delay(500).addClass('loaded').find('.page-loader').fadeOut(1000);
    });

    //Back To Top
    $("#back-top").hide();

    // fade in #back-top
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    $('#back-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    //Change Menu Background color On Scroll
    $(window).on('ready , scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    });

    //Mobile sub menu
    $(".custom-collapse .dropdown, .custom-collapse .dropdown-menu").on('click', function(event) {
        event.stopPropagation();
        $(this).find(".custom-collapse .dropdown, .custom-collapse .dropdown-menu").removeClass('open');
        $(this).parents(".custom-collapse .dropdown, .custom-collapse .dropdown-menu").addClass('open');
        $(this).toggleClass('open');
    });

    //Search
    $('#search-trigger').on('click', function() {
        $('#search').addClass('active').find('.search').focus();
        return false;
    });

    $('#search').on('click', function() {
        $(this).find('.search').focus();
    });

    $('#close').on('click', function() {
        $('#search').removeClass('active');
    });

    //Work Carousel
    $(".work-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoHeight: false,
        pagination: false,
        touchDrag: true,
        navigation: true,
        navigationText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });

    //Work Carousel 2
    $(".work-carousel-2").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoHeight: false,
        pagination: false,
        touchDrag: true,
        navigation: true,
        navigationText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });

    //Work Carousel 3
    $(".work-carousel-3").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoHeight: false,
        pagination: true,
        touchDrag: true,
        navigation: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });

    //Partners Carousel
    $(".partners").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoHeight: false,
        pagination: false,
        touchDrag: true,
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    //Partners-2 Carousel
    $(".partners-2").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoHeight: false,
        pagination: false,
        touchDrag: true,
        navigation: true,
        navigationText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        items: 7,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    //Property Detail Carousel
    $(".property-detail-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        navigation: true,
        navigationText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
    });

    //Agents Carousel
    $(".agents-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoHeight: false,
        pagination: false,
        touchDrag: true,
        navigation: true,
        navigationText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2]
    });

    //Agents Carousel
    $(".featured-properties-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoHeight: false,
        pagination: false,
        touchDrag: true,
        navigation: true,
        navigationText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    //Related Posts Carousel
    $(".related-posts-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoHeight: false,
        pagination: false,
        touchDrag: true,
        navigation: true,
        navigationText: [
            "<i class='flaticon-left-arrow-1'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
    });

    //Wow / Reveal animation on scroll
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    //Contact Form
    $('#contact-form').on('submit', function() {
        var $form = $(this);
        var data = $(this).serialize();

        $.ajax({
                url: 'contact.php',
                type: 'POST',
                data: data,
            })
            .done(function(res) {
                if (res && !$(res).hasClass('failure')) {
                    $form.find('input, textarea').val('');
                }
            })
            .always(function(res) {
                $('#ajax-message').html(res);
            });

        // Add text 'Sending...' right after clicking on the submit button. 
        $('#ajax-message').text('Sending...');

        setTimeout(function() {
            $("#ajax-message").hide()
        }, 8000);

        return false;
    });
});