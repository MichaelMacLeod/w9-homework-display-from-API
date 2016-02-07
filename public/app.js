window.onload = function () {
    //setup views
    var countrySelectView = new CountrySelectView(document.querySelector('#countries'));
    var countryDetailView = new CountryDetailView(document.querySelector('#info'));

    //setup map
    var map = new Map();

    //link change on select to update detail view
    countrySelectView.onChange = function(country){
      countryDetailView.display(country);
      lastCountry.save(country);
      console.log(map.markers);

      latLng = {
        lat: country.latlng[0],
        lng: country.latlng[1]
      }
      icon = {
        url: "http://www.geoips.com//assets/img/flag/128h/" + country.alpha2Code.toLowerCase() + ".png",
        scaledSize: new google.maps.Size(32, 20),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      }
      map.setCenter(latLng);
      map.addInfoWindow(latLng, country.name, icon);

    }

    //setup country list model
    var world = new CountryList();

    //update views on data update
    world.onUpdate = function(countries){
      countrySelectView.populate(countries);
      var savedCountry = lastCountry.get();
      if(savedCountry){
        countrySelectView.setSelectedIndex(savedCountry.index);
        countryDetailView.display(savedCountry);
        latLng = {
          lat: savedCountry.latlng[0],
          lng: savedCountry.latlng[1]
        }
        map.setCenter(latLng);

      }

    };

    //get data from server
    world.populate();

};

