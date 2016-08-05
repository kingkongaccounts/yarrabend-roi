jQuery(document).ready(function($) {
	$('#showmore').click(function(e) {
		$('#readmore').toggle();
	});
	if ($(window).width() < 870) {
		$('#showmore').text("+ Read More");
	}
});