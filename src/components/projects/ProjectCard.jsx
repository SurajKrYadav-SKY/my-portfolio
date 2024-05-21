import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({
  project: { title, img, desc, source, demo, skills },
}) => {
  return (
    <div className="container">
      <div className="img">
<<<<<<< HEAD
        <img src={img} alt={title} />
=======
        <img src={img} alt={title}/>
>>>>>>> bf92e9a7114c2d1aa450ac45e71a21bd48ade8d4
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul className="techs">
        {skills.map((skill, id) => {
<<<<<<< HEAD
          return (
            <li key={id} className="tech">
              {skill}
            </li>
          );
=======
          return <li key={id} className="tech">{skill}</li>;
>>>>>>> bf92e9a7114c2d1aa450ac45e71a21bd48ade8d4
        })}
      </ul>
      <div className="links">
        <a href={demo} className="link">
          Demo
        </a>
        <a href={source} className="link">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
