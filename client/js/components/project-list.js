var React = require("react");

var Project = require("./project");

var PROJECTS = [
  {name: "EtsyNearMe", description: "Etsy store locator", thumbnail: "http://placekitten.com/300/900"},
  {name: "Blog-Tool", description: "Simple Node/MongoDB blog tool ", thumbnail: "http://placekitten.com/800/200"},
  {name: "Artist Hunter", description: "React Spotify", thumbnail: "http://placekitten.com/300/300"},
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
    for(var i=0; i < this.state.projects.length; i++) {
      var currentProject = this.state.projects[i];
      list.push(<Project key={i} name={currentProject.name} description={currentProject.description} thumbnail={currentProject.thumbnail} />);
    }
    return (
      <div className="project-list">
        {list}
      </div>
    );
  }
});

module.exports = ProjectList;
