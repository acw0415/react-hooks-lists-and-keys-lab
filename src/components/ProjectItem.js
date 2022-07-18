import React from "react";

function ProjectItem({ name, about, technologies }) {
  const listProject = technologies.map((proj) => (
    <span key={proj}>{proj}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{listProject}</div>
    </div>
  );
}

export default ProjectItem;
