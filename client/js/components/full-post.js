var React = require("react");

var FullPost = function(){
  return(
    <div id="full-post">
      <span className="close-x right">&times;</span>
      <h2 className="subject-header"></h2>
      <img className="image-content" src="" />
      <p className="body-content"></p>
    </div>
  );
}

module.exports = FullPost; 