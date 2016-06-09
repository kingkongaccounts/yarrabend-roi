jQuery(document).ready(function($) {

	$('.c-input').each(function(index, el) {

		var $cont = $(this);
		var $input = $(this).children('.c-input__input');
		var $label = $(this).children('.c-input__label');

		$input.focus(function(event) {
			$cont.addClass('hide-label');
		});

		$input.blur(function(event) {
			if($input.val() == '') {
				$cont.removeClass('hide-label');
			}
		});


	});

});