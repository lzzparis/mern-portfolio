var React = require("react");

var Project = function(props) {
  return (
    <div className="slide-wrapper slide-wrapper-project">
      <a className="project" href={props.url}>
        <img className="project-thumbnail" src={props.thumbnail} />
        <div className="project-content" href={props.url}>
          <h2 className="project-content-name">{props.name}</h2>
          <p className="project-content-description">{props.description}</p>
        </div>
      </a>
    </div>
  );
};

module.exports = Project;