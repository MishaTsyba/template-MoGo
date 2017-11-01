"use strict";
$(document).ready(function() {
	var nav = $('.nav__bar');
	$(document).on('click', '.burger, .nav__bar', function(){		
		$('.burger').toggleClass('active');
		nav.toggleClass('shown');
	});
});