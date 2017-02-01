var React = require("react");
var Carousel = require("react-responsive-carousel").Carousel;

var actions = require("../actions/actions");

var Project = require("./project");

var PROJECTS = [
  { 
    name: "Etsy Near Me", 
    description:  "Store locator built with HTML, CSS, and jQuery, using AJAX to "+
                  "interface with the Etsy Developer API.", 
    thumbnail: "../../assets/etsynearme.jpg",
    url: "http://lzzparis.github.io/etsynearme"
  },
  { 
    name: "Blog Tool", 
    description:  "Lightweight content manager comprising of a NodeJS server, an "+
                  "Express API, and a MongoDB database, as well as a simple "+
                  "administrative frontend built in HTML, CSS and jQuery.", 
    thumbnail: "../../assets/blog-tool.jpg",
    url: "https://hidden-crag-51505.herokuapp.com/"
  },

  { 
    name: "MERN blog", 
    description:  "Extended content manager using the same backend as Blog Tool, "+
                  "with an updated React/Redux frontend and additional features, "+
                  "including public and Passport-authenticated views, draft "+
                  "support, and Markdown formatting.", 
    thumbnail: "../../assets/blog-tool-extended.jpg",
    url: "https://blog-tool.herokuapp.com/#/"
  },
  { 
    name: "Artist Hunter", 
    description:  "Music recommendation engine built with React/Redux, using "+
                  "asynchronous actions and fetch to interface with the Spotify Web API.", 
    thumbnail: "../../assets/artist-hunter.jpg",
    url: "https://arcane-bastion-54494.herokuapp.com"
  }
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
        list.push(
            <Project key={i} name={currentProject.name} description={currentProject.description} thumbnail={currentProject.thumbnail} url={currentProject.url}/>
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
