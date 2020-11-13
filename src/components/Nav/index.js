import React from "react";
import "./index.css";

function Nav(props) {
  return (
    <nav className="nav">
      <ul className="nav__menu">
        <li>
          <a href="#" onClick={props.scrollToResume}>
            Resume
          </a>
          <a href="#" onClick={props.scrollToProjects}>
            Portfolio
          </a>
          <a href="#" onClick={props.scrollToAbout}>
            About
          </a>
          <a href="#" onClick={props.scrollToJscode}>
            a bit of JS
          </a>
          <a href="#" onClick={props.scrollToContact}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
