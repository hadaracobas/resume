import React, { useRef, useEffect } from "react";
import "./index.css";
import Nav from "../Nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons";
import { TweenMax, Power3 } from "gsap";

function Header(props) {
  let header = useRef(null);

  useEffect(() => {
    TweenMax.to(header, 1, {
      opacity: 1,
      x: 0,
      ease: Power3.easeOut,
      delay: 3,
    });
  }, []);

  return (
    <header
      className="header"
      ref={(el) => {
        header = el;
      }}
    >
      <div className="header__logoContainer">
        {/*<FontAwesomeIcon icon={faCode} />*/}
        <i class="fas fa-code"></i>
        <a href="#" className="header__logo">
          acobas.hadar@gmail.com
        </a>
      </div>
      <Nav
        scrollToResume={props.scrollToResume}
        scrollToProjects={props.scrollToProjects}
        scrollToAbout={props.scrollToAbout}
        scrollToJscode={props.scrollToJscode}
        scrollToContact={props.scrollToContact}
      />
    </header>
  );
}

export default Header;
