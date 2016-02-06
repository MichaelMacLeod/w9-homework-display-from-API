var Map = function(latLng){
  this.googleMap = new google.maps.Map(document.querySelector('#map'), {
    center: latLng,
    zoom: 5
  });
};

Map.prototype = {
  setCentre: function(latLng){
    this.googleMap.latLng;
  },
  addMarker: function(latLng, title, icon){
    var marker = new google.maps.Marker({
      map: this.googleMap,
      position: latLng,
      title: title,
      icon: icon, 
      animation: google.maps.Animation.DROP
    });
    return marker;
  },
  bindClick: function(){
      google.maps.event.addListener(this.googleMap, 'click', function(event){
        this.addInfoWindow(
          {lat: event.latLng.lat(), lng: event.latLng.lng()});
      }.bind(this));
    },

  addInfoWindow: function(latLng, country, icon){
    var marker = this.addMarker(latLng, country.name, icon);
    marker.addListener('click', function(){
      var infoWindow = new google.maps.InfoWindow({
        content: '<h3>' + country.name + '</h3><h4>' + country.population + '</h4>'
      });
      infoWindow.open(this.map, marker);
    });
  },

}