var React = require("react");
var Carousel = require("react-responsive-carousel").Carousel;

var actions = require("../actions/actions");

var Project = require("./project");

var PROJECTS = [
  { 
    name: "Etsy Near Me", 
    description: "Store locator built on HTML, CSS, and jQuery.  This was my frontend unit capstone, so the emphasis was third-party API integration and clean, responsive styling.", 
    thumbnail: "../../assets/etsynearme.jpg",
    url: "http://lzzparis.github.io/etsynearme"
  },
  { 
    name: "MERN blog", 
    description: "Extended content manager built on a MongoDB/Express/React/Node.js (MERN) stack.  This was my final course capstone, so emphasis was integrating all technologies together to create an interesting, functional, full-stack app.", 
    thumbnail: "../../assets/blog-tool-extended.jpg",
    url: "https://blog-tool.herokuapp.com/#/"
  },
  { 
    name: "Artist Hunter", 
    description: "Spotify recommendation engine build on React and Redux.  This was my React unit capstone, so emphasis was on effective use of React/Redux/React-Router.", 
    thumbnail: "../../assets/artist-hunter.jpg",
    url: "https://arcane-bastion-54494.herokuapp.com"
  },

  { 
    name: "Blog Tool", 
    description: "Simple content manager built on Node.js and MongoDB.  This was my backend unit capstone project so emphasis was building my own API to the server and database layers, with minimal styling.", 
    thumbnail: "../../assets/blog-tool.jpg",
    url: "https://hidden-crag-51505.herokuapp.com/"
  },

];



var ProjectList = React.createClass({
  getInitialState: function() {
    return {
      projects: PROJECTS
    }
  },
  componentWillMount: function() {
    this.props.dispatch(actions.modifyNavItemClass("projects"));
  },
  render: function() {
    var list = [];
      for (var i=0; i < this.state.projects.length; i++) {
        var currentProject = this.state.projects[i];
        var setRight = (i % 2 == 1);
        list.push(
            <Project key={i} setRight={setRight} name={currentProject.name} description={currentProject.description} thumbnail={currentProject.thumbnail} url={currentProject.url}/>
        );
      }
    return (
      <div className="projects">
        <div className="project-list">
          {list}
        </div>
      </div>
    );
  }
});

module.exports = ProjectList;
