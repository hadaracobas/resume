import React, { useState, useEffect } from "react";
import "./App.css";

// import components:
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [handleColorsTheme, setHandleColorsTheme] = useState("white-theme");
  const [disabledColorTheme, setDisabledColorTheme] = useState("black-theme");

  useEffect(() => {
    if (handleColorsTheme == "black-theme") {
      document.documentElement.style.setProperty("--backgrondColor", "#000");
      document.documentElement.style.setProperty("--textColor", "#fff");
      setDisabledColorTheme("white-theme");
    } else if (handleColorsTheme == "white-theme") {
      document.documentElement.style.setProperty("--backgrondColor", "#fff");
      document.documentElement.style.setProperty("--textColor", "#000");
      setDisabledColorTheme("black-theme");
    }
  }, [handleColorsTheme]);

  const changeColorThemeFunc = () => {
    let inputSlider = document.getElementById("slider");
    if (inputSlider.checked) {
      setHandleColorsTheme("black-theme");
    } else {
      setHandleColorsTheme("white-theme");
    }
  };

  const scrollToResumeFunc = (e) => {
    e.preventDefault();
    let resumeSection = document.getElementsByClassName("homeResume")[0];
    resumeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToProjectsFunc = (e) => {
    e.preventDefault();
    let projectsSection = document.getElementsByClassName("homeProjects")[0];
    projectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToAboutFunc = (e) => {
    e.preventDefault();
    let aboutSection = document.getElementsByClassName("homeAbout")[0];
    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToJscodeFunc = (e) => {
    e.preventDefault();
    let jscodeSection = document.getElementsByClassName("homeJscode")[0];
    jscodeSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToContactFunc = (e) => {
    e.preventDefault();
    let contactSection = document.getElementsByClassName("homeContact")[0];
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="app">
      <div class="switcher-container">
        <label id="switch" class="switch">
          <input type="checkbox" onChange={changeColorThemeFunc} id="slider" />
          <span class="slider round"></span>
        </label>
      </div>

      <Header
        scrollToResume={scrollToResumeFunc}
        scrollToProjects={scrollToProjectsFunc}
        scrollToAbout={scrollToAboutFunc}
        scrollToJscode={scrollToJscodeFunc}
        scrollToContact={scrollToContactFunc}
      />
      <Home
        scrollToResume={scrollToResumeFunc}
        scrollToProjects={scrollToProjectsFunc}
        scrollToAbout={scrollToAboutFunc}
        scrollToJscode={scrollToJscodeFunc}
        scrollToContact={scrollToContactFunc}
        colorTheme={handleColorsTheme}
      />
      <Footer />
    </div>
  );
}

export default App;
