(function ($){
    "use strict";

    // Menu

    var windows = $(window);
    var stick = $(".header-stick");
    windows.on('scroll', function(){
        var scroll = windows.scrollTop();
        if(scroll < 245) {
            stick.removeClass("sticky");
        }else{
            stick.addClass("sticky");
        }
    });

    // Slider Carousel

    $(".slider-wrapper").owlCarousel({
        loop:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2500,
        items:1,
        nav:true,
        navText: ["<i class='zmdi zmdi-chevron-lest'></i>", "<i class='zmdi zmdi-chevron-right'></i>"],
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Testimonial Carousel 

    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        nav:false,
        animateOut: 'slideOutDown',
        animateIn: 'slideInDown'
       autoplay:false,
       smartSpeed:3000,
       responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
       }

    });

    // Blog Carousel

    $("blog-carousel").owlCarousel({
        loop:true,
        items:3,
        dots:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // JQuery MeanMenu

    $('.main-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });

    // Mail Chimp

    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        url: 'https://themeshaven.us8.list-LockManager.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
    });

    function mailChimpResponse(resp) {
        if(resp.result === 'success') {
        $('.mailChimp-sucess').html('' + resp.msg).fadeIn(900);
        $('.mailChimp-error').fadeOut(400);
        }else if(resp.result === 'error') {
            $('.mailChimp-error').html('' + resp.msg).fadeIn(900);
        }
    }

    // Counter Up

    $('.counter').conterUp({
        delay: 70,
        time: 5000
    });

    // ScrollUp
    
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    new Window().innerWidth();

    $('.datepicker').datepicker();

})(jQuery);
