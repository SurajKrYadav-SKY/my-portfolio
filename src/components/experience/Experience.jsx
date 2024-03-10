import React from "react";
import "./Experience.scss";
import { experiences } from "../../store/data";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="content">
        <ul className="experiences">
          {experiences.map((exp,id) => {
            return <li key={id} className="item">
                <img src={exp.img} alt={exp.organisation} />
              <div className="details">
                <h3>{`${exp.role}, ${exp.organisation}`}</h3>
                <p>{`${exp.startDate} - ${exp.endDate}`}</p>
                <ul>{exp.experience.map((experience,id) => {
                  return <li key={id}>{experience}</li>
                })}
                </ul>
              </div>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
