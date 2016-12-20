var React = require("react");

var Project =  function(props) {
  var sideClass = ""; 
  if(props.setRight) { sideClass = "project-right"; }
  else { sideClass = "project-left"; }
  return (
    <div className={"project "+sideClass}>
      <a href={props.url} target="_blank">
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