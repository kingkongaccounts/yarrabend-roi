jQuery(document).ready(function($) {
	$('.js-scroll-down-1').click(function(event) {
		event.preventDefault();
		$('body, html').animate({scrollTop : $(window).height() }, 400);

	});

	$('.js-scroll-down-2').click(function(event) {
		event.preventDefault();
		var h = $(window).height() * 2;

		$('body, html').animate({scrollTop : h }, 400);

	});
});