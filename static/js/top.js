// Hide Header on on scroll down
var didScroll;
var firstScroll = false;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var is_menu_showed = false;
var is_scroll_down = false;

function slide_menu() {
  var slide_menu_left;
  var content_left;
  var animate_menu = 200;
  if (is_menu_showed){
    slide_menu_left = '-285px';
    content_left = '0px';
    is_menu_showed = !is_menu_showed;
  }
  else{
    slide_menu_left = '0px';
    content_left = '285px';
    is_menu_showed = !is_menu_showed;
  }
  $('.slide-menu').animate({
      left: slide_menu_left
  }, animate_menu);
  $('.home-menu').animate({
      left: content_left
  }, animate_menu);
  $('.content-wrapper').animate({
      left: content_left
  }, animate_menu);
  $('.splash-container').animate({
      left: content_left
  }, animate_menu);
  $('.resume-content').animate({
      left: content_left
  }, animate_menu);
}
function slide_menu_click(){
    $('.box-shadow-menu').click(function(){
        slide_menu();
    });
    $('.pure-menu-heading').click(function(){
        slide_menu();
    });
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function(event){
    didScroll = true;
    if (!is_scroll_down) {
      return ;
    }
    if(isScrolledIntoView('#animate-name')){
      $('#animate-name').removeClass().addClass('float-center card-container animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      });
    }
    else{
      $('#animate-name').removeClass().addClass('float-center card-container');
    }
    if(isScrolledIntoView('#left-card-1')){
      $('#left-card-1').removeClass().addClass('float-right card-container-2 animated bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      });
    }
    else{
      $('#left-card-1').removeClass().addClass('float-right card-container-2');
    }
    if(isScrolledIntoView('#right-card-1')){
      $('#right-card-1').removeClass().addClass('float-left card-container-2 animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      });
    }
    else{
      $('#right-card-1').removeClass().addClass('float-left card-container-2');
    }

});

setInterval(function() {
    if (didScroll) {
        if(!firstScroll){
          firstScrolled();
          firstScroll = true;
        }
        hasScrolled();
        didScroll = false;
    }
}, 250);

function firstScrolled(){
  $('.fa.fa-arrow-down.arrow').addClass('hidden');
}

function hasScrolled() {
    var st = $(this).scrollTop();
    if(st > 50) {
        $('.home-menu.pure-menu-open').removeAttr('id');
    } else {
        $('.home-menu.pure-menu-open').attr('id', 'transparent');
    }
    // Make sure they scroll more than delta
    /*if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight && !is_menu_showed){
        // Scroll Down
        //$('header').removeClass('nav-down').addClass('nav-up');
        is_scroll_down = true;
        $('.header').hide();
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            //$('header').removeClass('nav-up').addClass('nav-down');
            is_scroll_down = false;
            $('.header').show();
        }
    }

    lastScrollTop = st;*/
}

$(document).ready(function() {
  slide_menu_click();
  $('#Untitleddrawing-3').lazylinepainter( 
  {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
  }).lazylinepainter('paint');
  $('#splash_animate').removeClass().addClass('splash-head animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass().addClass('splash-head');
      $('#splash_animate2').removeClass().addClass('splash-subhead animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass().addClass('splash-subhead');
          $('.fa.fa-arrow-down.arrow').removeClass().addClass('fa fa-arrow-down arrow animated infinite pulse');
        });
    });
});

/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "Untitleddrawing-3": {
        "strokepath": [
            {
                "path": "m0 0l609.0 0l0 361.0l-609.0 0l0 -361.0z",
                "duration": 600
            },
            {
                "path": "m0 0l609.8819 0l0 361.41208l-609.8819 0z",
                "duration": 600
            },
            {
                "path": "m25.412073 27.293962l556.2205 0l0 313.4173l-556.2205 0z",
                "duration": 600
            },
            {
                "path": "m25.412073 27.293962l556.2205 0l0 313.4173l-556.2205 0z",
                "duration": 600
            },
            {
                "path": "m25.412073 56.939632l557.6378 0",
                "duration": 600
            },
            {
                "path": "m25.412073 56.939632l557.6378 0",
                "duration": 600
            },
            {
                "path": "m36.706036 43.52231l0 0c0 -3.5050507 3.4759636 -6.3464546 7.7637825 -6.3464546l0 0c4.287815 0 7.7637787 2.841404 7.7637787 6.3464546l0 0c0 3.5050545 -3.4759636 6.3464584 -7.7637787 6.3464584l0 0c-4.287819 0 -7.7637825 -2.841404 -7.7637825 -6.3464584z",
                "duration": 600
            },
            {
                "path": "m36.706036 43.52231l0 0c0 -3.5050507 3.4759636 -6.3464546 7.7637825 -6.3464546l0 0c4.287815 0 7.7637787 2.841404 7.7637787 6.3464546l0 0c0 3.5050545 -3.4759636 6.3464584 -7.7637787 6.3464584l0 0c-4.287819 0 -7.7637825 -2.841404 -7.7637825 -6.3464584z",
                "duration": 600
            },
            {
                "path": "m60.706036 43.52231l0 0c0 -3.5050507 3.4759636 -6.3464546 7.7637825 -6.3464546l0 0c4.287819 0 7.7637787 2.841404 7.7637787 6.3464546l0 0c0 3.5050545 -3.4759598 6.3464584 -7.7637787 6.3464584l0 0c-4.287819 0 -7.7637825 -2.841404 -7.7637825 -6.3464584z",
                "duration": 600
            },
            {
                "path": "m60.706036 43.52231l0 0c0 -3.5050507 3.4759636 -6.3464546 7.7637825 -6.3464546l0 0c4.287819 0 7.7637787 2.841404 7.7637787 6.3464546l0 0c0 3.5050545 -3.4759598 6.3464584 -7.7637787 6.3464584l0 0c-4.287819 0 -7.7637825 -2.841404 -7.7637825 -6.3464584z",
                "duration": 600
            },
            {
                "path": "m84.70604 43.52231l0 0c0 -3.5050507 3.4759598 -6.3464546 7.7637787 -6.3464546l0 0c4.287819 0 7.7637787 2.841404 7.7637787 6.3464546l0 0c0 3.5050545 -3.4759598 6.3464584 -7.7637787 6.3464584l0 0c-4.287819 0 -7.7637787 -2.841404 -7.7637787 -6.3464584z",
                "duration": 600
            },
            {
                "path": "m84.70604 43.52231l0 0c0 -3.5050507 3.4759598 -6.3464546 7.7637787 -6.3464546l0 0c4.287819 0 7.7637787 2.841404 7.7637787 6.3464546l0 0c0 3.5050545 -3.4759598 6.3464584 -7.7637787 6.3464584l0 0c-4.287819 0 -7.7637787 -2.841404 -7.7637787 -6.3464584z",
                "duration": 600
            },
            {
                "path": "m71.53018 99.29396l312.0 -1.8897629",
                "duration": 600
            },
            {
                "path": "m71.53018 99.29396l312.0 -1.8897629",
                "duration": 600
            },
            {
                "path": "m71.53018 139.29396l235.77954 -1.4173126",
                "duration": 600
            },
            {
                "path": "m71.53018 139.29396l235.77954 -1.4173126",
                "duration": 600
            },
            {
                "path": "m71.53018 179.29396l333.16534 -1.4173126",
                "duration": 600
            },
            {
                "path": "m71.53018 179.29396l333.16534 -1.4173126",
                "duration": 600
            },
            {
                "path": "m71.53018 219.29396l384.0 -0.47244263",
                "duration": 600
            },
            {
                "path": "m71.53018 219.29396l384.0 -0.47244263",
                "duration": 600
            },
            {
                "path": "m71.53018 259.29398l382.58267 0.47244263",
                "duration": 600
            },
            {
                "path": "m71.53018 259.29398l382.58267 0.47244263",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 609,
            "height": 361
        }
    }
}; 
