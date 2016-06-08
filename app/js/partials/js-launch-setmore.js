jQuery(document).ready(function($) {
	$('.js-launch-setmore').click(function(event) {
		$('#Setmore_button_iframe').trigger('click');
		console.log('test');
	});
});