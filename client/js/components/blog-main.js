var React = require("react");

var Sidebar = require("./sidebar");

var BlogMain = function(props) {
  return (
    <div className="blog-main">
      {props.children}    
      <Sidebar />
    </div>
  );
}

module.exports = BlogMain;