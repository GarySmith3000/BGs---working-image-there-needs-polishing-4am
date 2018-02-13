// This example uses a GroundOverlay to place an image on the map
// showing an antique map of Newark, NJ.

var historicalOverlay;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {
      lat: 51.481892,
      lng: -3.170665
    }
  });

  var imageBounds = {
    north: 51.481892,
    south: 51.481,
    east: -3.171,
    west: -3.172
  };
/*
  var imageBounds = {
  north: 40.773941,
  south: 40.712216,
  east: -74.12544,
  west: -74.22655
}; */

  historicalOverlay = new google.maps.GroundOverlay(
    'images/capitol.jpg',
    imageBounds);
  historicalOverlay.setMap(map);
  console.log("map set");
}
