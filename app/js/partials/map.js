var map;
function initMap() {

	var myLatLng = {lat: -37.781054, lng: 145.030695};
	var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
	var markers = [];
	var infowindows = [];

	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 15,
		scrollwheel: false,
		styles : styles
	});

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon : 'images/map-marker-main.svg'
	});


	// get map markers
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'data/markers.json', false);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			if(xhr.status === 200) {

				var data = JSON.parse(xhr.responseText);

				for(var i = 0; i < data.length; i++) {

					var lat = parseFloat(data[i].latitude);
					var lng = parseFloat(data[i].longitude);
					var content = '<h4 class="c-map-marker__title">' + data[i].address + '</h4>';

					infowindows[i] = new google.maps.InfoWindow({
						content: content
					});


					markers[i] = new google.maps.Marker({
						position: {lat: lat, lng: lng },
						icon: 'images/map-marker.png',
						map: map,
						marker_index: i
					});

					markers[i].addListener('click', function(e) {
						infowindows[this.marker_index].open(map, markers[this.marker_index]);
					});
				}
			}
		}
	};
	xhr.send();
}