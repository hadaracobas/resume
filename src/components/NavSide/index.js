import React, { useState, useEffect } from "react";
import "./index.css";

function NavSide(props) {
  const [handleShowAndHideSideBar, setHandleShowAndHideSideBar] = useState(
    false
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShowAndHideSideBar(true);
      } else {
        setHandleShowAndHideSideBar(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className="navside"
        style={
          handleShowAndHideSideBar
            ? { opacity: "1", visibility: "visible" }
            : { opacity: "0", visibility: "hidden" }
        }
      >
        <ul className="navside__menu">
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
    </>
  );
}

export default NavSide;
