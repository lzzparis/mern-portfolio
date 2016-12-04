var React = require("react");
var Slider = require("react-slick");

var Project = require("./project");

var PROJECTS = [
  {name: "EtsyNearMe", description: "Etsy store locator", thumbnail: "http://placekitten.com/300/900"},
  {name: "Blog-Tool", description: "Simple Node/MongoDB blog tool ", thumbnail: "http://placekitten.com/800/200"},
  {name: "Artist Hunter", description: "React Spotify", thumbnail: "http://placekitten.com/400/400"},
  {name: "EtsyNearMe", description: "Full stack MERN blog tool", thumbnail: "http://placekitten.com/800/800"},

];



var ProjectList = React.createClass({
  getInitialState: function() {
    return {
      projects: PROJECTS
    }
  },
  render: function() {
    var list = [];
    if (!this.state.projects.length) {
      list.push(<div></div>);
    }
    else {
      for (var i=0; i < this.state.projects.length; i++) {
        var currentProject = this.state.projects[i];
        list.push(<Project key={i} name={currentProject.name} description={currentProject.description} thumbnail={currentProject.thumbnail} />);
      }
    }
    var settings = {
      // infinite: false,
      // speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1
      dots: true
    };
    // return (
    //   <Slider className="project-list" {...settings}>
    //     {list || <div></div>}
    //   </Slider>
    // );
    return (
      <div className="project-list">
        {list || <div></div>}
      </div>
    );
  }
});

module.exports = ProjectList;
