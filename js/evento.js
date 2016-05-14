var localizame ={
	inicio: function(){
		document.addEventListener("deviceready",localizame.geolocaliazar,false);
	},
	geolocaliazar: function(){
		navigator.geolocation.getCurrentPosition(localizame.obtenerPosicion,localizame.correEnCirculos);
	},
	obtenerPosicion: function(posicion){
		localizame.mostrarPosicion(posicion.coords.latitude, posicion.coords.longitude);
	},
	mostrarPosicion: function(lat,lon){
		//Posición del mapa
		var latlng = new google.maps.LatLng(lat, lng);
		var myOptions = {
			zoom: 16,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("mapdiv"),myOptions);
		//Marcador
		var marker = new google.maps.Marker({
			position: latlng, 
			map: map, 
			title:"Mi posición"
		});
	},
	correEnCirculos: function(error){
    switch (error.code) {
        case error.PERMISSION_DENIED:
            //swal("¡ERROR!", "No se tiene permiso para obtener su ubicación", "error");
            alert('ERROR: User denied access to track physical position!');
            break;

        case error.POSITION_UNAVAILABLE:
            //swal("¡ERROR!", "Problema al intentar obtener su localización", "error");
            alert("ERROR: There is a problem getting the position of the device!");
            break;

        case error.TIMEOUT:
            //swal("¡ERROR!", "Se ha agotado el tiempo de espera para obtener su localización", "error");
            alert("ERROR: The application timed out trying to get the position of the device!");
            break;

        default:
            //swal("¡ERROR!", "Problema desconocido", "error");
            alert("ERROR:  Unknown problem!");
            break;
    }
}
};
$(localizame.inicio);