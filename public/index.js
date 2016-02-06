window.onload = function(){
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function(){
    if(request.status === 200){
      console.log("App is rolling...");
      console.log(request.responseText);
    }
  }
  request.send(null);
};