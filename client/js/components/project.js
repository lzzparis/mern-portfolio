var React = require("react");

var Project = function(props) {
  return (
    <div className="slide-wrapper slide-wrapper-project">
      <div className="project">
          <img className="project-thumbnail" src={props.thumbnail} />
          <div className="project-content">
            <h2 className="project-content-name">{props.name}</h2>
            <p className="project-content-description">{props.description}</p>
          </div>
      </div>
    </div>
  );
};

module.exports = Project;