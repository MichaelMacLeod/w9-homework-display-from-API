var  Map = function(){
  this.markers = [];
  console.log(this);
  this.googleMap = new google.maps.Map(document.querySelector("#map"),{
    center: {lat: 55.864873, lng: -99.256676},
    zoom: 6
  }),
  this.addMarker = function(latLng, title, icon){
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      title: title,
      icon: icon, 
      animation: google.maps.Animation.DROP
    });
    this.markers.push(marker);
    return(marker);
  },
  this.setCenter = function(latLng){
    this.googleMap.setCenter(latLng);
  },
  this.addInfoWindow = function(latLng, title, icon){
    var marker = this.addMarker(latLng, title, icon);
    marker.addListener('click', function(event){
      var infoWindow = new google.maps.InfoWindow({
        content: this.title
      });
      infoWindow.open(this.map, marker);
    });
  }
}