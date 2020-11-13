import React from "react";
import "./index.css";

function HighlightProject({
  title,
  subtitle,
  imageAlt,
  imageUrl,
  liveUrl,
  githubUrl,
}) {
  return (
    <div className="highlightProject">
      <div className="highlightProject__textContent">
        <h2 className="highlightProject__title">{title}</h2>
        <p className="highlightProject__subtitle">{subtitle}</p>
        <p className="highlightProject__links">
          <a href={liveUrl} target="_blank">
            Live
          </a>{" "}
          |{" "}
          <a href={githubUrl} target="_blank">
            Github
          </a>
        </p>
      </div>

      <div className="highlightProject__imgContainer">
        <img alt={imageAlt} src={imageUrl} />
      </div>
    </div>
  );
}

export default HighlightProject;
