console.log("map loaded!")

//==================================== initialize map
var map;
var lat;
var long;

function initializeMap(){
  var defaultCenter = new google.maps.LatLng(41.893974, -87.627945);

  var defaultOptions = {
    zoom: 14,
    center: defaultCenter,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map'), defaultOptions);

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        lat = new google.maps.LatLng(position.coords.latitude);
        long = new google.maps.LatLng(position.coords.longitude);
      console.log(lat.A,long.A);

      var infowindow = new google.maps.InfoWindow({
        zoom: 20,
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Please turn on Location Services.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: defaultCenter,
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }
}

google.maps.event.addDomListener(window, 'load', initializeMap);


//==================================== get location coordinates from user input
var geocoder = new google.maps.Geocoder();

function codeAddress() {
  var address = document.getElementById("address").value;

  geocoder.geocode( { 'address': address}, function(results, status) {

    lat = results[0].geometry.location.A;
    long = results[0].geometry.location.F;

  if (status == google.maps.GeocoderStatus.OK) {
    // var actLocation = new post.location(results[0].geometry.location)
    console.log( lat, long )

  } else {
    alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
