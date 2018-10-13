import $ from 'jquery';

$(document).ready(function() {
	var $hamburger = $('#hamburger');
	var $menu = $('#main-nav ul');

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
});