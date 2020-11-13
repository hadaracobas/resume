import React, { useState, useEffect } from "react";
import "./index.css";
import HighlightProject from "../HighlightProject";

function HighlightProjects() {
  const projects = [
    {
      id: 1,
      title: "Covid-19 Tracker",
      subtitle: "Web App - React.js",
      imageUrl: "assets/img/covid-19-screenshot-croped1.png",
      altImage: "covid-19 image",
      liveUrl: "https://covid-19-tracker-8dd72.web.app/",
      githubUrl: "https://github.com/hadaracobas/covid-19-tracker",
    },
    {
      id: 2,
      title: "Netflix Clone",
      subtitle: "Web App - React.js",
      imageUrl: "assets/img/netflix-screenshot-croped.png",
      altImage: "netflix clone app image",
      liveUrl: "https://naughty-wing-c42302.netlify.app/",
      githubUrl: "https://github.com/hadaracobas/netflix-clone",
    },

    {
      id: 3,
      title: "Amazon Clone",
      subtitle: "Web App - React.js",
      imageUrl: "assets/img/amazon-croped.png",
      altImage: "amazon clone app image",
      liveUrl: "https://clone-f7e8e.web.app/",
      githubUrl: "https://github.com/hadaracobas/amazon-clone",
    },
    {
      id: 4,
      title: "Flickr API",
      subtitle: "Web App - React.js",
      imageUrl: "assets/img/flickr-api-croped.png",
      altImage: "flickr api app image",
      liveUrl: "https://boring-thompson-0ebe0b.netlify.app/",
      githubUrl: "https://github.com/hadaracobas/techdegree-project-11",
    },
    {
      id: 5,
      title: "Todo App",
      subtitle: "Web App - React.js",
      imageUrl: "assets/img/todo-croped.png",
      altImage: "todo app image",
      liveUrl: "https://todo-app-78fdc.web.app/",
      githubUrl: "https://github.com/hadaracobas/todo-app",
    },
    {
      id: 6,
      title: "Teams Generator",
      subtitle: "Web App - React.js",
      imageUrl: "assets/img/teamsportgenerator1-croped.png",
      altImage: "teams generator app image",
      liveUrl: "https://sport-teams-generator.web.app/",
      githubUrl: "https://github.com/hadaracobas/sport-teams-generator",
    },
    {
      id: 7,
      title: "Wheel Of Success",
      subtitle: "Game - JS",
      imageUrl: "assets/img/wheel-of-success-game-croped.png",
      altImage: "wheel of success game image",
      liveUrl: "https://hadaracobas.github.io/techdegree-project-7/",
      githubUrl: "https://github.com/hadaracobas/techdegree-project-7",
    },
    {
      id: 8,
      title: "Employee App",
      subtitle: "API",
      imageUrl: "assets/img/employee-directory-croped.png",
      altImage: "employee directory image",
      liveUrl: "https://hadaracobas.github.io/techdegree-project-10/",
      githubUrl: "https://github.com/hadaracobas/techdegree-project-10",
    },
    {
      id: 9,
      title: "Dashboard App",
      subtitle: "Sass",
      imageUrl: "assets/img/dashboard-app-croped.png",
      altImage: "dashboard app image",
      liveUrl: "https://hadaracobas.github.io/techdegree-project-9/",
      githubUrl: "https://github.com/hadaracobas/techdegree-project-9",
    },
    {
      id: 10,
      title: "Instagram Clone",
      subtitle: "Web App - React.js",
      imageUrl: "assets/img/instagram-croped.png",
      altImage: "instagram clone app image",
      liveUrl: "https://instagram-clone-3705a.web.app/",
      githubUrl: "https://github.com/hadaracobas/instagram-clone",
    },
    {
      id: 11,
      title: "Renovation Site",
      subtitle: "Web App - React.js",
      imageUrl: "assets/img/renovation-site-croped.png",
      altImage: "renovation site image",
      liveUrl: "https://thirsty-aryabhata-afc527.netlify.app/",
      githubUrl: "https://github.com/hadaracobas/beck-hachzakot",
    },
    {
      id: 12,
      title: "Transcript Video",
      subtitle: "JS",
      imageUrl: "assets/img/transcript-video-croped.png",
      altImage: "transcript video site image",
      liveUrl: "https://hadaracobas.github.io/techdegree-project-6/",
      githubUrl: "https://github.com/hadaracobas/techdegree-project-6",
    },
  ];
  const [count, setCount] = useState(0);

  const nextProjects = () => {
    if (count < 10 && count >= 0) {
      setCount((prevCount) => prevCount + 2);
    }
  };
  const prevProjects = () => {
    if (count <= 12 && count >= 2) {
      setCount((prevCount) => prevCount - 2);
    }
  };

  return (
    <div className="highlightProjects">
      <div className="highlightProjects__navProjects">
        <span
          onClick={prevProjects}
          style={
            count === 0 ? { color: "gray" } : { color: "var(--textColor)" }
          }
        >
          <i class="fas fa-arrow-left"></i>Prev Projects
        </span>
        <span
          onClick={nextProjects}
          style={
            count === 10 ? { color: "gray" } : { color: "var(--textColor)" }
          }
        >
          Next Projects
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>

      <div className="highlightProjects__projectsContainer">
        <div className="highlightProjects__project1Container">
          <HighlightProject
            title={projects[count].title}
            subtitle={projects[count].subtitle}
            imageUrl={projects[count].imageUrl}
            imageAlt={projects[count].altImage}
            liveUrl={projects[count].liveUrl}
            githubUrl={projects[count].githubUrl}
          />
        </div>
        <div className="highlightProjects__project2Container">
          <HighlightProject
            title={projects[count + 1].title}
            subtitle={projects[count + 1].subtitle}
            imageUrl={projects[count + 1].imageUrl}
            imageAlt={projects[count + 1].altImage}
            liveUrl={projects[count + 1].liveUrl}
            githubUrl={projects[count + 1].githubUrl}
          />
        </div>
      </div>
    </div>
  );
}

export default HighlightProjects;
