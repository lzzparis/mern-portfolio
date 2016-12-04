var React = require("react");

var Project = function(props) {
  return (
    <div className="project">
        <h2 className="project-name">{props.name}</h2>
        <p className="project-description">{props.description}</p>
        <img className="project-thumbnail" src={props.thumbnail} />
    </div>
  );
};

module.exports = Project;