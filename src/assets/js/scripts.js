import $ from 'jquery';
/* eslint-disable */

$(document).ready(function() {
	var $hamburger = $('#hamburger');
  var $menu = $('#main-nav ul');
  var $contactButton = $('.contact');
  var $contactClose = $('#contact-modal .close');

	$hamburger.on('click', function () {
  	$menu.toggleClass('open');

  	$(this).toggleClass('open');

  	if ($menu.attr('aria-expanded') === 'true') {
      $menu.attr('aria-expanded', 'false');
    } else {
      $menu.attr('aria-expanded', 'true');
    }

    $('html').toggleClass('menu-open');
  });

	$(window).scroll(function(){
	    var scrollPos = $(document).scrollTop();
	    var $header = $('.header-wrapper');

	    if (scrollPos > 60) {
	    	$header.addClass('scrolled');
	    }
	    else {
	    	$header.removeClass('scrolled');
	    }
  });
  
  $contactButton.on('click', function (e) {
    e.preventDefault();
    $('#contact-modal').addClass('visible').animate({
      opacity: 1,
    }, 500);
  });

  $contactClose.on('click', function (e) {
    e.preventDefault();
    $('#contact-modal').animate({
      opacity: 0,
    }, 500, function () {
      $(this).removeClass('visible');
    });
  });

  $('a.about').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about").offset().top - 60
    }, 1000);
  });

  $('a.projects').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#projects").offset().top - 60
    }, 1000);
  });
});