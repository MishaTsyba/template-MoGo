$(document).ready(function() {
	$('.hamburger').click(function(){
    	
    	if ($('.nav__bar').is(':visible')) {
    		$('.nav__bar').slideUp();
    	} else {
    		$('.nav__bar').slideDown();
    	}
	});
})