jQuery(document).ready(function($) {
	$('.js-goto-section').click(function(event) {
		event.preventDefault();

		// get the section
		var sectionName = $(this).attr('data-section');


		// get distance from top
		var distanceFromTop = $('#' + sectionName).offset().top;

		// scroll to section
		$('body, html').animate({ scrollTop: distanceFromTop }, 500);

		// close menu
		$('body').removeClass('menu-open');
	});
});