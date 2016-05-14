//GEOLOACALIZACION

$(document).ready(function(){
    localizar();
});

function localizar() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarUbicacion, correEnCirculos);
    } else {
        alert('Lo siento :( el navegador es algo antiguo, actualiza para usar localización');
    }
}

function mostrarUbicacion(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var latlng = new google.maps.LatLng(lat, lon);

    geocoder = new google.maps.Geocoder();
    geocoder.geocode({ "latLng": latlng }, function (results, status) {

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

        var map = new google.maps.Map(document.getElementById("mapdiv"), confGoogleMaps);
        var marker = new google.maps.Marker({
            map: map,
            position: latlng,
            animation: google.maps.Animation.DROP,
            title: "Usted esta aqui",
            icon: 'js/img/icoloc.png'
        });

    });

}

function correEnCirculos(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            swal("¡ERROR!", "No se tiene permiso para obtener su ubicación", "error");
            //alert('ERROR: User denied access to track physical position!');
            break;

        case error.POSITION_UNAVAILABLE:
            swal("¡ERROR!", "Problema al intentar obtener su localización", "error");
            //alert("ERROR: There is a problem getting the position of the device!");
            break;

        case error.TIMEOUT:
            swal("¡ERROR!", "Se ha agotado el tiempo de espera para obtener su localización", "error");
            //alert("ERROR: The application timed out trying to get the position of the device!");
            break;

        default:
            swal("¡ERROR!", "Problema desconocido", "error");
            //alert("ERROR:  Unknown problem!");
            break;
    }
}