var locations = [];

$.ajax({
    method: 'get',
    url: 'https://data.cityofchicago.org/resource/uh4d-zh38?$$app_token=Prn58WX99dW48gNx4RtzbOjIy', //this should be replaced with an internal api to the DB
    dataType: 'json'
    })
    .done(function(data){
      // data = data.slice(1,data.length/2);
      for(var i=0; i<data.length; i++){
        locations.push(data[i]);
      };
      console.log(data);
      var marker;

      for (var i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
          map: map
        });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    };
  });


  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
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

  var geocoder = new google.maps.Geocoder();

  function codeAddress() {
    var address = document.getElementById("address").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      console.log(results[0].geometry.location);
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        map.setZoom(16);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            image: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  google.maps.event.addDomListener(window, 'load', initializeMap);
