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

  $('#splash_animate').removeClass().addClass('splash-head animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass().addClass('splash-head');
      $('#splash_animate2').removeClass().addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass();
          if(firstScroll){
            $('.fa.fa-arrow-down.arrow').removeClass().addClass('.hidden');
          }
          else{
            $('.fa.fa-arrow-down.arrow').removeClass().addClass('fa fa-arrow-down arrow animated infinite pulse');
          }
        });
    });

  $('#coding').lazylinepainter(
  {
    "svgData": pathObj1,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
  }).lazylinepainter('paint');
  $('#Camera').lazylinepainter(
  {
    "svgData": pathObj2,
    "strokeWidth": 2,
    "strokeColor": "#e09b99"
  }).lazylinepainter('paint');
});

/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj1 = {
    "coding": {
        "strokepath": [
            {
                "path": "m0 0l310.0 0l0 198.0l-310.0 0l0 -198.0z",
                "duration": 600
            },
            {
                "path": "m-0.30708662 20.94892l311.59058 0.25196838",
                "duration": 600
            },
            {
                "path": "m6.014765 11.372704l0 0c0 -2.5048504 1.9459748 -4.5354333 4.3464565 -4.5354333l0 0c1.1527519 0 2.2582903 0.477839 3.073409 1.3283973c0.8151188 0.85055923 1.2730474 2.0041647 1.2730474 3.207036l0 0c0 2.5048504 -1.9459743 4.535433 -4.3464565 4.535433l0 0c-2.4004817 0 -4.3464565 -2.0305824 -4.3464565 -4.535433z",
                "duration": 600
            },
            {
                "path": "m19.448883 11.372704l0 0c0 -2.5048504 1.9459763 -4.5354333 4.3464565 -4.5354333l0 0c1.1527519 0 2.2582912 0.477839 3.07341 1.3283973c0.8151188 0.85055923 1.2730484 2.0041647 1.2730484 3.207036l0 0c0 2.5048504 -1.9459763 4.535433 -4.3464584 4.535433l0 0c-2.4004803 0 -4.3464565 -2.0305824 -4.3464565 -4.535433z",
                "duration": 600
            },
            {
                "path": "m32.883 11.372704l0 0c0 -2.5048504 1.9459763 -4.5354333 4.3464584 -4.5354333l0 0c1.1527519 0 2.2582893 0.477839 3.07341 1.3283973c0.8151169 0.85055923 1.2730446 2.0041647 1.2730446 3.207036l0 0c0 2.5048504 -1.9459724 4.535433 -4.3464546 4.535433l0 0c-2.4004822 0 -4.3464584 -2.0305824 -4.3464584 -4.535433z",
                "duration": 600
            },
            {
                "path": "m25.507751 51.190575l174.64568 -1.354332",
                "duration": 600
            },
            {
                "path": "m25.507751 79.7512l131.9685 -1.0078735",
                "duration": 600
            },
            {
                "path": "m25.507751 108.31182l186.48819 -1.0078735",
                "duration": 600
            },
            {
                "path": "m25.507751 136.87245l214.92914 -0.34646606",
                "duration": 600
            },
            {
                "path": "m25.507751 165.43307l214.14174 0.3464508",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 310,
            "height": 198
        }
    }
};

var pathObj2 = {
    "Camera": {
        "strokepath": [
            {
                "path": "m0.5013123 32.131233l310.77167 0l0 157.63779l-310.77167 0z",
                "duration": 600
            },
            {
                "path": "m89.115486 32.131233l6.401573 -25.606298l120.74016 0l6.401581 25.606298z",
                "duration": 600
            },
            {
                "path": "m1.0052494 48.19685l310.77167 0",
                "duration": 600
            },
            {
                "path": "m0.2519685 171.10236l310.77164 0",
                "duration": 600
            },
            {
                "path": "m102.52231 110.94882l0 0c0 -24.918045 22.851105 -45.11811 51.039368 -45.11811l0 0c28.188263 0 51.039368 20.200066 51.039368 45.11811l0 0c0 24.918045 -22.851105 45.118103 -51.039368 45.118103l0 0c-28.188263 0 -51.039368 -20.200058 -51.039368 -45.118103z",
                "duration": 600
            },
            {
                "path": "m112.42782 110.950134l0 0c0 -20.08229 18.416252 -36.362206 41.133858 -36.362206l0 0c22.717606 0 41.133865 16.279915 41.133865 36.362206l0 0c0 20.08229 -18.41626 36.362198 -41.133865 36.362198l0 0c-22.717606 0 -41.133858 -16.279907 -41.133858 -36.362198z",
                "duration": 600
            },
            {
                "path": "m9.036745 32.144356l2.8897638 -11.559053l19.322834 0l2.8897629 11.559053z",
                "duration": 600
            },
            {
                "path": "m15.564304 68.78215l38.645668 0l0 18.078743l-38.645668 0z",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 311,
            "height": 233
        }
    }
};
