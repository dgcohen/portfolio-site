import $ from 'jquery';
/* eslint-disable */

$(document).ready(function() {
	var $hamburger = $('#hamburger');
  var $menu = $('#main-nav ul');
  var $contactButton = $('#contact .contact');
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
  
  $contactButton.on('click', function () {
    $('#contact-modal').show();
  });

  $contactClose.on('click', function () {
    $('#contact-modal').hide(); 
  });
});