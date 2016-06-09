function initMap(){var e={lat:-37.781054,lng:145.030695},t=[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],i=[],a=[];map=new google.maps.Map(document.getElementById("map"),{center:e,zoom:15,scrollwheel:!1,styles:t});var n=(new google.maps.Marker({position:e,map:map,icon:"images/map-marker-main.svg"}),new XMLHttpRequest);n.open("GET","data/markers.json",!1),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status)for(var e=JSON.parse(n.responseText),t=0;t<e.length;t++){var s=parseFloat(e[t].latitude),o=parseFloat(e[t].longitude),r='<h4 class="c-map-marker__title">'+e[t].address+"</h4>";a[t]=new google.maps.InfoWindow({content:r}),i[t]=new google.maps.Marker({position:{lat:s,lng:o},icon:"images/map-marker.png",map:map,marker_index:t}),i[t].addListener("click",function(e){a[this.marker_index].open(map,i[this.marker_index])})}},n.send()}jQuery(document).ready(function(e){e(".c-input").each(function(t,i){var a=e(this),n=e(this).children(".c-input__input");e(this).children(".c-input__label");n.keyup(function(t){""==e(this).val()?a.removeClass("hide-label"):a.addClass("hide-label")}),n.change(function(t){""==e(this).val()?a.removeClass("hide-label"):a.addClass("hide-label")}),n.blur(function(e){""==n.val()&&a.removeClass("hide-label")})})}),jQuery(document).ready(function(e){e(".js-goto-section").click(function(t){t.preventDefault();var i=e(this).attr("data-section"),a=e("#"+i).offset().top;e("body, html").animate({scrollTop:a},500),e("body").removeClass("menu-open")})}),jQuery(document).ready(function(e){e(".js-form-close").click(function(t){e("body").removeClass("form-open")})}),jQuery(document).ready(function(e){e(".js-form-open").click(function(t){e("body").addClass("form-open")})}),jQuery(document).ready(function(e){e(".js-scroll-to-top").click(function(t){t.preventDefault(),e("body, html").animate({scrollTop:0},400)})});var map;jQuery(document).ready(function(e){e(".js-menu-toggle").click(function(t){e("body").toggleClass("menu-open")})}),jQuery(document).ready(function(e){e(".js-scroll-down-1").click(function(t){t.preventDefault();var i=e(window).scrollTop(),a=e(window).height(),n=i+a;e("body, html").animate({scrollTop:n},400)})}),jQuery(document).ready(function(e){function t(){for(var t=e(window).scrollTop(),i=document.getElementsByTagName("section"),a=i[0].getAttribute("id"),n=0;n<i.length;n++){var s=i[n].getAttribute("id"),o=i[n].offsetTop;t>=o&&(a=s)}for(var r=document.getElementsByClassName("js-update-on-scroll"),l=!1,n=0;n<r.length;n++){var c=r[n].getAttribute("data-section");c==a?(r[n].classList.add("is-active"),l=r[n].getAttribute("data-section")):r[n].classList.remove("is-active")}if(l===!1){r.length-1}}t(),e(window).scroll(function(e){t()})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5qcyIsImMtaW5wdXQuanMiLCJnby10by5qcyIsImpzLWZvcm0tY2xvc2UuanMiLCJqcy1mb3JtLW9wZW4uanMiLCJqcy1zY3JvbGwtdG8tdG9wLmpzIiwibWVudS5qcyIsInNjcm9sbC1kb3duLmpzIiwid2F5ZmluZGVyLmpzIl0sIm5hbWVzIjpbImluaXRNYXAiLCJteUxhdExuZyIsImxhdCIsImxuZyIsInN0eWxlcyIsImZlYXR1cmVUeXBlIiwic3R5bGVycyIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJ2aXNpYmlsaXR5IiwiZWxlbWVudFR5cGUiLCJodWUiLCJtYXJrZXJzIiwiaW5mb3dpbmRvd3MiLCJtYXAiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsInpvb20iLCJzY3JvbGx3aGVlbCIsInhociIsIk1hcmtlciIsInBvc2l0aW9uIiwiaWNvbiIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiaSIsImxlbmd0aCIsInBhcnNlRmxvYXQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnRlbnQiLCJhZGRyZXNzIiwiSW5mb1dpbmRvdyIsIm1hcmtlcl9pbmRleCIsImFkZExpc3RlbmVyIiwiZSIsInRoaXMiLCJzZW5kIiwialF1ZXJ5IiwicmVhZHkiLCIkIiwiZWFjaCIsImluZGV4IiwiZWwiLCIkY29udCIsIiRpbnB1dCIsImNoaWxkcmVuIiwia2V5dXAiLCJldmVudCIsInZhbCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjaGFuZ2UiLCJibHVyIiwiY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInNlY3Rpb25OYW1lIiwiYXR0ciIsImRpc3RhbmNlRnJvbVRvcCIsIm9mZnNldCIsInRvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0b2dnbGVDbGFzcyIsImN1cnJlbnRTY3JvbGwiLCJ3aW5kb3ciLCJ3aW5kb3dIZWlnaHQiLCJoZWlnaHQiLCJuZXdTY3JvbGwiLCJmaW5kTG9jYXRpb24iLCJ3aW5kb3dMb2NhdGlvbiIsInNlY3Rpb25zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJyZXR1cm5WYWx1ZSIsImdldEF0dHJpYnV0ZSIsInNlY3Rpb25JRCIsInNlY3Rpb25DZWlsIiwib2Zmc2V0VG9wIiwibmF2SXRlbXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWN0aXZlSUQiLCJ0ZW1wIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic2Nyb2xsIl0sIm1hcHBpbmdzIjoiQUFDQSxRQUFBQSxXQUVBLEdBQUFDLElBQUFDLElBQUEsV0FBQUMsSUFBQSxZQUNBQyxJQUFBQyxZQUFBLFlBQUFDLFVBQUFDLFdBQUEsT0FBQUMsVUFBQSxLQUFBQyxXQUFBLFNBQUFKLFlBQUEsTUFBQUMsVUFBQUMsV0FBQSxPQUFBQyxVQUFBLEtBQUFDLFdBQUEsaUJBQUFKLFlBQUEsZUFBQUMsVUFBQUMsV0FBQSxPQUFBRSxXQUFBLGlCQUFBSixZQUFBLGdCQUFBQyxVQUFBQyxXQUFBLE9BQUFDLFVBQUEsS0FBQUMsV0FBQSxTQUFBSixZQUFBLGFBQUFDLFVBQUFDLFdBQUEsT0FBQUMsVUFBQSxLQUFBQyxXQUFBLFNBQUFKLFlBQUEsVUFBQUMsVUFBQUMsV0FBQSxPQUFBRSxXQUFBLGlCQUFBSixZQUFBLDBCQUFBQyxVQUFBRyxXQUFBLFVBQUFKLFlBQUEsUUFBQUssWUFBQSxTQUFBSixVQUFBRyxXQUFBLE9BQUFELFVBQUEsTUFBQUQsV0FBQSxTQUFBRixZQUFBLFFBQUFLLFlBQUEsV0FBQUosVUFBQUssSUFBQSxZQUFBSCxVQUFBLE1BQUFELFdBQUEsUUFDQUssS0FDQUMsSUFFQUMsS0FBQSxHQUFBQyxRQUFBQyxLQUFBQyxJQUFBQyxTQUFBQyxlQUFBLFFBQ0FDLE9BQUFuQixFQUNBb0IsS0FBQSxHQUNBQyxhQUFBLEVBQ0FsQixPQUFB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QyxHQUFBOUIsRUFBQXlCLFFBQUFILFlBR0FTLEVBQUFoRSxTQUFBaUUscUJBQUEsV0FDQUMsRUFBQUYsRUFBQSxHQUFBRyxhQUFBLE1BR0FqRCxFQUFBLEVBQUFBLEVBQUE4QyxFQUFBN0MsT0FBQUQsSUFBQSxDQUVBLEdBQUFrRCxHQUFBSixFQUFBOUMsR0FBQWlELGFBQUEsTUFDQUUsRUFBQUwsRUFBQTlDLEdBQUFvRCxTQUNBUCxJQUFBTSxJQUNBSCxFQUFBRSxHQU9BLElBQUEsR0FIQUcsR0FBQXZFLFNBQUF3RSx1QkFBQSx1QkFDQUMsR0FBQSxFQUVBdkQsRUFBQSxFQUFBQSxFQUFBcUQsRUFBQXBELE9BQUFELElBQUEsQ0FDQSxHQUFBd0QsR0FBQUgsRUFBQXJELEdBQUFpRCxhQUFBLGVBQ0FPLElBQUFSLEdBQ0FLLEVBQUFyRCxHQUFBeUQsVUFBQUMsSUFBQSxhQUNBSCxFQUFBRixFQUFBckQsR0FBQWlELGFBQUEsaUJBRUFJLEVBQUFyRCxHQUFBeUQsVUFBQUUsT0FBQSxhQUlBLEdBQUFKLEtBQUEsRUFDQSxDQUFBRixFQUFBcEQsT0FBQSxHQUtBMkMsSUFDQTdCLEVBQUF5QixRQUFBb0IsT0FBQSxTQUFBckMsR0FDQXFCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwO1xuZnVuY3Rpb24gaW5pdE1hcCgpIHtcblxuXHR2YXIgbXlMYXRMbmcgPSB7bGF0OiAtMzcuNzgxMDU0LCBsbmc6IDE0NS4wMzA2OTV9O1xuXHR2YXIgc3R5bGVzID0gW3tcImZlYXR1cmVUeXBlXCI6XCJsYW5kc2NhcGVcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOi0xMDB9LHtcImxpZ2h0bmVzc1wiOjY1fSx7XCJ2aXNpYmlsaXR5XCI6XCJvblwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJwb2lcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOi0xMDB9LHtcImxpZ2h0bmVzc1wiOjUxfSx7XCJ2aXNpYmlsaXR5XCI6XCJzaW1wbGlmaWVkXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6LTEwMH0se1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJzdHlsZXJzXCI6W3tcInNhdHVyYXRpb25cIjotMTAwfSx7XCJsaWdodG5lc3NcIjozMH0se1widmlzaWJpbGl0eVwiOlwib25cIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZC5sb2NhbFwiLFwic3R5bGVyc1wiOlt7XCJzYXR1cmF0aW9uXCI6LTEwMH0se1wibGlnaHRuZXNzXCI6NDB9LHtcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInRyYW5zaXRcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOi0xMDB9LHtcInZpc2liaWxpdHlcIjpcInNpbXBsaWZpZWRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmUucHJvdmluY2VcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcIndhdGVyXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9LHtcImxpZ2h0bmVzc1wiOi0yNX0se1wic2F0dXJhdGlvblwiOi0xMDB9XX0se1wiZmVhdHVyZVR5cGVcIjpcIndhdGVyXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1wiaHVlXCI6XCIjZmZmZjAwXCJ9LHtcImxpZ2h0bmVzc1wiOi0yNX0se1wic2F0dXJhdGlvblwiOi05N31dfV07XG5cdHZhciBtYXJrZXJzID0gW107XG5cdHZhciBpbmZvd2luZG93cyA9IFtdO1xuXG5cdG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG5cdFx0Y2VudGVyOiBteUxhdExuZyxcblx0XHR6b29tOiAxNSxcblx0XHRzY3JvbGx3aGVlbDogZmFsc2UsXG5cdFx0c3R5bGVzIDogc3R5bGVzXG5cdH0pO1xuXG5cdHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcblx0XHRwb3NpdGlvbjogbXlMYXRMbmcsXG5cdFx0bWFwOiBtYXAsXG5cdFx0aWNvbiA6ICdpbWFnZXMvbWFwLW1hcmtlci1tYWluLnN2Zydcblx0fSk7XG5cblxuXHQvLyBnZXQgbWFwIG1hcmtlcnNcblx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHR4aHIub3BlbignR0VUJywgJ2RhdGEvbWFya2Vycy5qc29uJywgZmFsc2UpO1xuXHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcblx0XHRcdGlmKHhoci5zdGF0dXMgPT09IDIwMCkge1xuXG5cdFx0XHRcdHZhciBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcblxuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXG5cdFx0XHRcdFx0dmFyIGxhdCA9IHBhcnNlRmxvYXQoZGF0YVtpXS5sYXRpdHVkZSk7XG5cdFx0XHRcdFx0dmFyIGxuZyA9IHBhcnNlRmxvYXQoZGF0YVtpXS5sb25naXR1ZGUpO1xuXHRcdFx0XHRcdHZhciBjb250ZW50ID0gJzxoNCBjbGFzcz1cImMtbWFwLW1hcmtlcl9fdGl0bGVcIj4nICsgZGF0YVtpXS5hZGRyZXNzICsgJzwvaDQ+JztcblxuXHRcdFx0XHRcdGluZm93aW5kb3dzW2ldID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuXHRcdFx0XHRcdFx0Y29udGVudDogY29udGVudFxuXHRcdFx0XHRcdH0pO1xuXG5cblx0XHRcdFx0XHRtYXJrZXJzW2ldID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjoge2xhdDogbGF0LCBsbmc6IGxuZyB9LFxuXHRcdFx0XHRcdFx0aWNvbjogJ2ltYWdlcy9tYXAtbWFya2VyLnBuZycsXG5cdFx0XHRcdFx0XHRtYXA6IG1hcCxcblx0XHRcdFx0XHRcdG1hcmtlcl9pbmRleDogaVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0bWFya2Vyc1tpXS5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRpbmZvd2luZG93c1t0aGlzLm1hcmtlcl9pbmRleF0ub3BlbihtYXAsIG1hcmtlcnNbdGhpcy5tYXJrZXJfaW5kZXhdKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0eGhyLnNlbmQoKTtcbn0iLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcblxuXHQkKCcuYy1pbnB1dCcpLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsKSB7XG5cblx0XHR2YXIgJGNvbnQgPSAkKHRoaXMpO1xuXHRcdHZhciAkaW5wdXQgPSAkKHRoaXMpLmNoaWxkcmVuKCcuYy1pbnB1dF9faW5wdXQnKTtcblx0XHR2YXIgJGxhYmVsID0gJCh0aGlzKS5jaGlsZHJlbignLmMtaW5wdXRfX2xhYmVsJyk7XG5cblx0XHQkaW5wdXQua2V5dXAoZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdGlmKCQodGhpcykudmFsKCkgPT0gJycpIHtcblx0XHRcdFx0JGNvbnQucmVtb3ZlQ2xhc3MoJ2hpZGUtbGFiZWwnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRjb250LmFkZENsYXNzKCdoaWRlLWxhYmVsJyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkaW5wdXQuY2hhbmdlKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRpZigkKHRoaXMpLnZhbCgpID09ICcnKSB7XG5cdFx0XHRcdCRjb250LnJlbW92ZUNsYXNzKCdoaWRlLWxhYmVsJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkY29udC5hZGRDbGFzcygnaGlkZS1sYWJlbCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JGlucHV0LmJsdXIoZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdGlmKCRpbnB1dC52YWwoKSA9PSAnJykge1xuXHRcdFx0XHQkY29udC5yZW1vdmVDbGFzcygnaGlkZS1sYWJlbCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cblx0fSk7XG5cbn0pOyIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHQkKCcuanMtZ290by1zZWN0aW9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Ly8gZ2V0IHRoZSBzZWN0aW9uXG5cdFx0dmFyIHNlY3Rpb25OYW1lID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNlY3Rpb24nKTtcblxuXG5cdFx0Ly8gZ2V0IGRpc3RhbmNlIGZyb20gdG9wXG5cdFx0dmFyIGRpc3RhbmNlRnJvbVRvcCA9ICQoJyMnICsgc2VjdGlvbk5hbWUpLm9mZnNldCgpLnRvcDtcblxuXHRcdC8vIHNjcm9sbCB0byBzZWN0aW9uXG5cdFx0JCgnYm9keSwgaHRtbCcpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGRpc3RhbmNlRnJvbVRvcCB9LCA1MDApO1xuXG5cdFx0Ly8gY2xvc2UgbWVudVxuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XG5cdH0pO1xufSk7IiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cdCQoJy5qcy1mb3JtLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2Zvcm0tb3BlbicpO1xuXHR9KTtcbn0pOyIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHQkKCcuanMtZm9ybS1vcGVuJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2Zvcm0tb3BlbicpO1xuXHR9KTtcbn0pOyIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXHQkKCcuanMtc2Nyb2xsLXRvLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwIH0sIDQwMCk7XG5cdH0pO1xufSk7IiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cdCQoJy5qcy1tZW51LXRvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtZW51LW9wZW4nKTtcblx0fSk7XG59KTsiLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcblx0JCgnLmpzLXNjcm9sbC1kb3duLTEnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHR2YXIgY3VycmVudFNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHR2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXHRcdHZhciBuZXdTY3JvbGwgPSBjdXJyZW50U2Nyb2xsICsgd2luZG93SGVpZ2h0O1xuXG5cdFx0JCgnYm9keSwgaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcCA6IG5ld1Njcm9sbCB9LCA0MDApO1xuXG5cdH0pO1xufSk7IiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cblx0Ly8gdXBkYXRlIG5hdiBvbiBzY3JvbGxcblxuXHRmdW5jdGlvbiBmaW5kTG9jYXRpb24oKSB7XG5cblx0XHR2YXIgd2luZG93TG9jYXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0dmFyIHRvdGFsID0gMDtcblxuXHRcdHZhciBzZWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWN0aW9uJyk7XG5cdFx0dmFyIHJldHVyblZhbHVlID0gc2VjdGlvbnNbMF0uZ2V0QXR0cmlidXRlKCdpZCcpO1xuXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdHZhciBzZWN0aW9uSUQgPSBzZWN0aW9uc1tpXS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG5cdFx0XHR2YXIgc2VjdGlvbkNlaWwgPSBzZWN0aW9uc1tpXS5vZmZzZXRUb3A7XG5cdFx0XHRpZih3aW5kb3dMb2NhdGlvbiA+PSBzZWN0aW9uQ2VpbCkge1xuXHRcdFx0XHRyZXR1cm5WYWx1ZSA9IHNlY3Rpb25JRDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgbmF2SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy11cGRhdGUtb24tc2Nyb2xsJyk7XG5cdFx0dmFyIGFjdGl2ZUlEID0gZmFsc2U7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgdGVtcCA9IG5hdkl0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWN0aW9uJyk7XG5cdFx0XHRpZih0ZW1wID09IHJldHVyblZhbHVlKSB7XG5cdFx0XHRcdG5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuXHRcdFx0XHRhY3RpdmVJRCA9IG5hdkl0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWN0aW9uJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihhY3RpdmVJRCA9PT0gZmFsc2UpIHtcblx0XHRcdHZhciBsYXN0ID0gbmF2SXRlbXMubGVuZ3RoIC0gMTtcblx0XHRcdC8vbmF2SXRlbXNbbGFzdF0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG5cdFx0fVxuXHR9XG5cblx0ZmluZExvY2F0aW9uKCk7XG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRmaW5kTG9jYXRpb24oKTtcblx0fSk7XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
