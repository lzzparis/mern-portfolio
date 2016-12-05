var React = require("react");
var Carousel = require("react-responsive-carousel").Carousel;

var Project = require("./project");

var PROJECTS = [
  { 
    name: "Etsy Near Me", 
    description: "Store locator built on HTML, CSS, and jQuery.  This was my frontend unit capstone, so the emphasis was third-party API integration and clean, creative styling.", 
    thumbnail: "../../assets/etsynearme.png",
    url: "http://lzzparis.github.io/etsynearme"
  },
  { 
    name: "Blog Tool", 
    description: "Simple content manager built on Node.js and MongoDB.  This was my backend unit capstone project so emphasis was put on building my own API to the server and database layers, with minimal styling.", 
    thumbnail: "../../assets/blog-tool.png",
    url: "https://hidden-crag-51505.herokuapp.com/"
  },
  { 
    name: "Artist Hunter", 
    description: "Spotify recommendation engine build on React and Redux.  This was my React unit capstone, so emphasis was on effective use of React/Redux/React-Router.", 
    thumbnail: "../../assets/artist-hunter.png",
    url: "https://arcane-bastion-54494.herokuapp.com"
  },
  { 
    name: "Blog Tool (Extended)", 
    description: "Extended content manager built on a MongoDB/Express/React/Node.js (MERN) stack.  This was my final course capstone, so emphasis was integrating all tools together.", 
    thumbnail: "../../assets/blog-tool-extended.png",
    url: "https://blog-tool.herokuapp.com/#/"
  },

];



var ProjectList = React.createClass({
  getInitialState: function() {
    return {
      projects: PROJECTS
    }
  },
  render: function() {
    var list = [];
      for (var i=0; i < this.state.projects.length; i++) {
        var currentProject = this.state.projects[i];
        list.push(
            <Project key={i} name={currentProject.name} description={currentProject.description} thumbnail={currentProject.thumbnail} url={currentProject.url}/>
        );
      }
    return (
      <Carousel className="project-list" showThumbs={false} showStatus={false} useKeyboardArrows={true} infiniteLoop={true}>
        {list}
      </Carousel>
    );
    // return (
    //   <div className="project-list">
    //     {list || <div></div>}
    //   </div>
    // );
  }
});

module.exports = ProjectList;
