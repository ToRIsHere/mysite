// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var is_menu_showed = false
var slide_menu = function(){
    $('.box-shadow-menu').click(function(){
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
        $('.content-wrapper').animate({
            left: content_left
        }, animate_menu);
        $('.splash-container').animate({
            left: content_left
        }, animate_menu);
        $('#body').animate({
            left: content_left
        }, animate_menu);
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
    if(isScrolledIntoView('#animate-name')){
      $('#animate-name').removeClass().addClass('float-center card-container animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      });
    }
    else{
      $('#animate-name').removeClass().addClass('float-center card-container');
    }

});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);



function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight && !is_menu_showed){
        // Scroll Down
        //$('header').removeClass('nav-down').addClass('nav-up');
        $('.header').hide();
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            //$('header').removeClass('nav-up').addClass('nav-down');
            $('.header').show();
        }
    }

    lastScrollTop = st;
}

$(document).ready(function() {
  slide_menu();
  $('#splash_animate').removeClass().addClass('splash animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass().addClass('splash');
    });
});
