import React, { useState } from "react";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="logo">
      <img src="./images/me.jpg" alt=""  className="me"/>
      <a className="title" href="/">
        My Portfolio
      </a>
      </div>
      <div className="menu">
        <div className="icon" onClick={toggleMenu}>
          {showMenu ? (
            <CloseIcon className="menuBtn" />
          ) : (
            <MenuIcon className="menuBtn" />
          )}
        </div>

        <ul
          className={`${"items"} ${showMenu && "menuOpen"}`}
          onClick={() => setShowMenu(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
          <li>
            <a
              href="https://github.com/SurajKrYadav-SKY"
              target="_blank"
              style={{
                background: "linear-gradient(to right, #279ff5, #4bfadd)",
                borderRadius: "20px",
                padding: "10px 15px",
                border: "1px solid lightgray",
              }}
              onMouseEnter={(e) => e.target.style.border = "2px solid #19fa7a"}
              onMouseLeave={(e) => e.target.style.border = "1px solid lightgray"}
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
