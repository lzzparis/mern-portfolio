var React = require("react");
var ReactDOM = require("react-dom");
var Provider = require("react-redux").Provider;

var store = require("./store"); 
var routes = require("./routes");

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>
    , document.getElementById("app"));

  //Preload the remaining background images 
  var images = new Array();
  function preload(urls) {
    for (var i = 0; i < urls.length; i++) {
      images[i] = new Image();
      images[i].src = urls[i];
    }
  }
  preload([
    "http://lizzieparis.herokuapp.com/assets/towel.jpg",
    "http://lizzieparis.herokuapp.com/assets/popcorn.jpg",
    "http://lizzieparis.herokuapp.com/assets/shingle.jpg"
    ]
  );  
});