import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({project : {title, img, desc, source, demo, skills} }) => {
  return (
    <div className="container">
      <img src={img} alt={title}/>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul className="skills">
        {skills.map((skill, id) => {
          return <li key={id} className="skill">{skill}</li>;
        })}
      </ul>
      <div className="links">
        <a href={demo} className="link">Demo</a>
        <a href={source} className="link">Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
