import React, { useState } from "react";
import "./Hero.scss";
import { Typewriter } from "react-simple-typewriter";
import { bios } from "../../store/data";
import Modal from "../modal/Modal";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        {bios.map((bio, index) => (
          <div key={index}>
            <h1 className="title">Hi, I'm {bio.name}</h1>
            <h2
              style={{
                paddingBottom: "2rem",
                margin: "auto 0",
                fontWeight: "normal",
              }}
            >
              I am a{" "}
              <span style={{ color: "#FB5825", fontWeight: "bold" }}>
                <Typewriter
                  words={bio.roles}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p>{bio.desc}</p>
          </div>
        ))}
        <Modal />
      </div>
      <img src="./images/hero1.png" alt="#" className="img" />
      <div className="topBlur" />
    </div>
  );
};

export default Hero;
