var fn = {
	ready: function(){
		document.addEventListener("deviceready", fn.init, false);
	},
	init: function(){
		navigator.geolocation.getCurrentPosition(fn.posicionObtenida, fn.error);
	},
	posicionObtenida: function(p){
		fn.dibujarMapa(p.coords.latitude, p.coords.longitude);
	},
	error: function(err){
		alert(err.message);
	},
	dibujarMapa: function(lat, lng) {
		//Posición del mapa
		var latlng = new google.maps.LatLng(lat, lng);
		var confGoogleMaps = {
            zoom: 14,
            center: latlng,
            mapTypeControl: false,
            scrollwheel: false,
            draggable: true,
            scaleControl: false,
            zoomControl: false,
            disableDefaultUI: true,
            disableDoubleClickZoom: true,
            navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
		var map = new google.maps.Map(document.getElementById("map_canvas"),confGoogleMaps);
		//Marcador
		var marker = new google.maps.Marker({
			map: map,
            position: latlng,
            animation: google.maps.Animation.DROP,
            title: "Usted esta aqui",
            icon: 'icoloc.png'
		});
	},
};
$(fn.ready);