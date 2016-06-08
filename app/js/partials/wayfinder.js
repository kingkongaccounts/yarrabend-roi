jQuery(document).ready(function($) {

	// update nav on scroll

	function findLocation() {

		var windowLocation = $(window).scrollTop();
		var total = 0;

		var sections = document.getElementsByTagName('section');
		var returnValue = sections[0].getAttribute('id');


		for (var i = 0; i < sections.length; i++) {

			var sectionID = sections[i].getAttribute('id');
			var sectionCeil = sections[i].offsetTop;
			if(windowLocation >= sectionCeil) {
				returnValue = sectionID;
			}
		}

		var navItems = document.getElementsByClassName('js-update-on-scroll');
		var activeID = false;

		for (var i = 0; i < navItems.length; i++) {
			var temp = navItems[i].getAttribute('data-section');
			if(temp == returnValue) {
				navItems[i].classList.add('is-active');
				activeID = navItems[i].getAttribute('data-section');
			} else {
				navItems[i].classList.remove('is-active');
			}
		}

		if(activeID === false) {
			var last = navItems.length - 1;
			//navItems[last].classList.add('is-active');
		}
	}

	findLocation();
	$(window).scroll(function(event) {
		findLocation();
	});
});