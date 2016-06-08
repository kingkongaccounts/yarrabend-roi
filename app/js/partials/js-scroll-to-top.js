jQuery(document).ready(function($) {
	$('.js-scroll-to-top').click(function(event) {
		event.preventDefault();
		$('body, html').animate({scrollTop: 0 }, 400);
	});
});