import React from "react";
import "./index.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a
          href="https://www.linkedin.com/in/hadar-acobas-b63924158/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="https://github.com/hadaracobas" target="_blank">
          <i className="fab fa-github-square"></i>
        </a>
      </div>
      <p className="footer-credit">built by me (:</p>
    </div>
  );
}

export default Footer;
