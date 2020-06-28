$(document).ready(function () {

    // Loading screen
    $(window).on('load', function () {
        "use strict";
        $(".background").fadeOut(1000);
        $(".share").fadeIn(1000);
    });


    // Start popup main video

    $(window).on('load',function(){
        $('#popup_main_video').modal('show');
    });

    $('.follow_up').click(function (){
        $('#popup_main_video').modal('hide');
    });



    // Change content when click on submit_form_signin
    $(".submit_form_signin").click('on', function (e) {
        e.preventDefault();
        $('#my_account .change_text').text("Enter the confirmation code");
        $('#my_account .change_palceholder').attr("placeholder", "Confirmation code");
        $('#my_account .send_again').css('display', 'flex');
        $(this).text("Enter Code");
    });

    // Change content when click on submit_form_register
    $(".submit_form_register").click('on', function (e) {
        e.preventDefault();
        $('#client_register .change_text').text("Enter the confirmation code");
        $('#client_register .change_palceholder').attr("placeholder", "Confirmation code");
        $('#client_register .send_again').css('display', 'flex');
        $(this).text("Enter Code");
    });


    // control payment methods
    $("#customRadioInline2").click('on', function () {
        $('.transfer').fadeOut();
    });
    $("#customRadioInline1").click('on', function () {
        $('.transfer').fadeIn();
    });

    // Add smooth scrolling to all links
    $("header a, footer a").on('click', function(event) {
  
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

      // Deal with tabs (another way)
    $(".tab-switch.three li").click(function(){
        // Add selected class to active link
        $(this).addClass("selected").siblings().removeClass("selected");
        // Hide all divs
        $('.tab_content.three >  div').hide();
        // Sow div connected with this link
        $('.' + $(this).data('class')).show();
    });

      // Deal with tabs (another way)
    $(".tab-switch.four li").click(function(){
        // Add selected class to active link
        $(this).addClass("selected").siblings().removeClass("selected");
        // Hide all divs
        $('.tab_content.four >  div').hide();
        // Sow div connected with this link
        $('.' + $(this).data('class')).show();
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
    $('[carouselPanel="1"]').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav: false,
        dots: false,
        rtl:true,
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
    $('[carouselPanel="1"]').find('.owl-nav').removeClass('disabled');
    $('[carouselPanel="1"]').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });

    /* // Nice Scroll
    $("body").niceScroll({
        background:"rgba(20,20,20,0)",
        cursorcolor: "rgba(29, 188, 221, 1)",
        cursorwidth: "12px",
        
    });

    $('#order').click(function() {
        $("body").niceScroll( { on: false  } );
    }); */


    /* if($("body").hasClass("modal-open")) {
        $('modal').niceScroll({
            
        })
    } */

    // switch to client register from my account
    $('#switch_client_my_account').click(function() {
        $('#my_account').modal('hide');
        $('#client_register').modal('show');
    });

    // switch to marketer register from my account
    $('#switch_marketer_my_account').click(function() { 
    $('#my_account').modal('hide');
    $('#marketer_register').modal('show');
    });

    // switch to client register from marketer register
    $('#switch_client_marketer').click(function() {
        $('#marketer_register').modal('hide');
        $('#client_register').modal('show');
      });

    // switch to marketer register from client register
    $('#switch_marketer_client').click(function() {
        $('#client_register').modal('hide');
        $('#marketer_register').modal('show');
      });

    
    // switch to my account from client register or marketer register
    $('.already_account').click(function() {
        $('#client_register').modal('hide');
        $('#marketer_register').modal('hide');
        $('#my_account').modal('show');
    });

    // switch to popup share from any popup
    $('.share').click(function() {
        $('#popup_main_video').modal('hide');
        $('#my_account').modal('hide');
        $('#message').modal('hide');
        $('#goal').modal('hide');
        $('#vision').modal('hide');
        $('#client_register').modal('hide');
        $('#marketer_register').modal('hide');
        $('#popup_video').modal('hide');
        $('#order_popup').modal('hide');
        $('#popup_share').modal('show');
    });


});
