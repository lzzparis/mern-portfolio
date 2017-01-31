var React = require("react");

var Project =  function(props) {
  return (
    <div className={"project"}>
      <a href={props.url} target="_blank">
        <img className="project-thumbnail" src={props.thumbnail} />
          <h2 className="project-content-name">{props.name}</h2>
          <p className="project-content-description">{props.description}</p>
      </a>
    </div>
  );
};

module.exports = Project;