$(document).ready(function () {

    // Loading screen
    $(window).on('load', function () {
        "use strict";
        $(".loading-overlay .sk-chase").fadeOut(1000, function () {
            $(this).parent().fadeOut(1000, function () {
                $(this).remove();
            });
        });
    });


    // Start popup main video
    $(window).on('load', function () {
        $('.popup_main_video').fadeIn().addClass('d-flex');
    });

    $('.follow_up').click(function (){
        $('.popup_main_video').fadeOut(500, function () {
            $(this).removeClass('d-flex');
        });
    });




    // Start popup My account
    $('.account').click(function (e) {
        e.preventDefault();
        $('.popup_account').fadeIn().addClass('d-flex');
    });

    $('.close_button').click(function (){
        $('.popup_account').fadeOut(500, function () {
            $(this).removeClass('d-flex');
        });
    });

    // Change content when click on submit_form
    $("#submit_form").click('on', function (e) {
        e.preventDefault();
        $('#change_text').text("Enter the confirmation code");
        $('.change_palceholder').attr("placeholder", "Confirmation code");
        $('#send_again').css('display', 'flex');
        $(this).text("Enter Code");
    });

    // Start order popup
    $('.order').click(function () {
        $('.order_popup').fadeIn().addClass('d-flex');
    });

    $('.close_button').click(function (){
        $('.order_popup').fadeOut(500, function () {
            $(this).removeClass('d-flex');
        });
    });

    // control payment methods
    $("#customRadioInline2").click('on', function () {
        $('.transfer').fadeOut();
    });
    $("#customRadioInline1").click('on', function () {
        $('.transfer').fadeIn();
    });

    // Add smooth scrolling to all links
    /* $("a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      }); */

    // Start popup Message
    $('#message').click(function () {
        $('.message').fadeIn().addClass('d-flex');
    });

    $('.close_button').click(function (){
        $('.message').fadeOut(500, function () {
            $(this).removeClass('d-flex');
        });
    });


    // Start popup goals
    $('#goal').click(function () {
        $('.goal').fadeIn().addClass('d-flex');
    });

    $('.close_button').click(function (){
        $('.goal').fadeOut(500, function () {
            $(this).removeClass('d-flex');
        });
    });


    // Start popup vision
    $('#vision').click(function () {
        $('.vision').fadeIn().addClass('d-flex');
    });

    $('.close_button').click(function (){
        $('.vision').fadeOut(500, function () {
            $(this).removeClass('d-flex');
        });
    });


    // Start popup video
    $('.play_button').click(function () {
        $('.popup_video').fadeIn().addClass('d-flex');
    });

    $('.close_button').click(function (){
        $('.popup_video').fadeOut(500, function () {
            $(this).removeClass('d-flex');
        });
    });

    // Deal with tabs
    $("ul.set_one li a").click(function (e) {
        e.preventDefault();
        $('ul.set_one li.active').removeClass('active');
        $(this).parent('li').addClass('active');
          $(this).tab('show');
      });

    // Deal with tabs
    $("ul.sub_one li a").click(function (e) {
        e.preventDefault();
        $('ul.sub_one li.active').removeClass('active');
        $(this).parent('li').addClass('active');
          $(this).tab('show');
      });

    // Deal with tabs
    $("ul.sub_two li a").click(function (e) {
        e.preventDefault();
        $('ul.sub_two li.active').removeClass('active');
        $(this).parent('li').addClass('active');
          $(this).tab('show');
      });


    // Deal with tabs
    $("ul.set_two li a").click(function (e) {
        e.preventDefault();
        $('ul.set_two li.active').removeClass('active');
        $(this).parent('li').addClass('active');
          $(this).tab('show');
      });

    // Deal with tabs
    $("ul.sub_two_one li a").click(function (e) {
        e.preventDefault();
        $('ul.sub_two_one li.active').removeClass('active');
        $(this).parent('li').addClass('active');
          $(this).tab('show');
      });

    // Deal with tabs
    $("ul.sub_two_two li a").click(function (e) {
        e.preventDefault();
        $('ul.sub_two_two li.active').removeClass('active');
        $(this).parent('li').addClass('active');
          $(this).tab('show');
      });




    // Scroll Button

    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    });

    // Click On Button To Scroll Top
     
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });

    // carousel
    var deal = $('#deal');
    $('#deal').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav: false,
        dots: false,
        navText:["<i class='nav-btn next-slide fas fa-chevron-left'></i>","<i class='nav-btn prev-slide fas fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:4
            }
        }
    });
    $('#deal').find('.owl-nav').removeClass('disabled');
    $('#deal').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });

    // Start share popup
    $('.share').click(function () {
        $('.popup_share').fadeIn().addClass('d-flex');
    });

    $('.close_button').click(function (){
        $('.popup_share').fadeOut(500, function () {
            $(this).removeClass('d-flex');
        });
    });

    // Nice Scroll
    $("html").niceScroll({
        background:"rgba(20,20,20,0)",
        cursorcolor: "rgba(29, 188, 221, 1)",
        cursorwidth: "12px",
        zindex:'9999'
    });

});