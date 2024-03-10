import React from "react";
import "./Skills.scss";
import { skills } from "../../store/data";

const Skills = () => {
  return (
    <div className="skills" id="skill">
      <h1>Skills</h1>
      <div className="content">
        <div className="skills">
          {skills.map((skill,index) => (
            <div className="skill" key={index}>
              <div className="skillTitle">{skill.title}</div>
              <div className="list">
                {skill.skills.map((item,itemIndex) => (
                  <div className="item" key={itemIndex}>
                    <div className="icons">
                      <img src={item.image} alt="sk" className="icon" />
                    </div>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
