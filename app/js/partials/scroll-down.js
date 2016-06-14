jQuery(document).ready(function($) {
	$('.js-scroll-down-1').click(function(event) {
		event.preventDefault();

		// var currentScroll = $(window).scrollTop();
		// var windowHeight = $(window).height();
		// var newScroll = currentScroll + windowHeight;

		$('body, html').animate({scrollTop : $(window).height() }, 400);

	});
});