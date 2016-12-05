var React = require("react");

var Project = function(props) {
  return (
    <div className="slide-wrapper slide-wrapper-project">
      <div className="project">
          <img className="project-thumbnail" src={props.thumbnail} />
          <a className="project-content" href={props.url}>
            <h2 className="project-content-name">{props.name}</h2>
            <p className="project-content-description">{props.description}</p>
          </a>
      </div>
    </div>
  );
};

module.exports = Project;