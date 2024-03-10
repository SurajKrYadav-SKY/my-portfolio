import React from "react";
import "./About.scss";
import { about } from "../../store/data";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div className="content">
        <img src="./images/coding.png" alt="Coding" className="aboutImg" />
          <ul className="items" >
        {about.map((abt, index) => {
          return( 
            <li className="item" key={index}>
              <img src={abt.img} alt={abt.title} className="img1" />
              <div className="info">
                <h3>{abt.title}</h3>
                <p>{abt.desc}</p>
              </div>
            </li>
          )
        })}
        </ul>
        
      </div>
    </div>
  );
};

export default About;
