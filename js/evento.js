var localizame ={
	inicio: function(){
		document.addEventListener("deviceready",localizame.geolocaliazar,false);
	},
	geolocaliazar: function(){
		navigator.geolocation.getCurrentPosition(localizame.mostrarPosicion,localizame.correEnCirculos);
	},
	mostrarPosicion: function(posicion){
		var lat = position.coords.latitude;
    	var lon = position.coords.longitude;
    	var latlng = new google.maps.LatLng(lat, lon);

	    geocoder = new google.maps.Geocoder();
	    geocoder.geocode({ "latLng": latlng }, function (results, status) {

	        var mapaPersonalizado = {
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

	        var map = new google.maps.Map(document.getElementById("mapdiv"), mapaPersonalizado);
	        var marker = new google.maps.Marker({
	            map: map,
	            position: latlng,
	            animation: google.maps.Animation.DROP,
	            title: "Usted esta aqui",
	            icon: 'js/img/icon.png'
	        });

	    });
	},
	correEnCirculos: function(errorch){
		alert("Tarde o temprano te encontraré ¬_¬. " + errorch.message);
	}
};
$(localizame.inicio);