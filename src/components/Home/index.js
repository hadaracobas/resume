import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import { gsap, TweenMax, Power3 } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";

import HighlightProjects from "../HighlightProjects";
import JsCode from "../JsCode";
import NavSide from "../NavSide";

gsap.registerPlugin(ScrollTrigger);

function Home(props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  let homeWelcomeTitle = useRef(null);
  let homeWelcomeSubtitle = useRef(null);
  let homeWelcomeParagraph = useRef(null);
  let homeWelcomeImage = useRef(null);
  let homeResume = useRef(null);

  useEffect(() => {
    TweenMax.to(homeWelcomeTitle, 2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
    });

    TweenMax.to(homeWelcomeSubtitle, 2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 0.7,
    });

    TweenMax.to(homeWelcomeParagraph, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 1.4,
    });

    TweenMax.to(homeWelcomeImage, 2, {
      opacity: 1,
      y: 0,
      ease: Power3.easeOut,
      delay: 2.4,
    });

    /*
    TweenMax.staggerFrom(
      homeResumeSectionTitle,
      2,
      {
        y: 30,
        ease: Power3.easeOut,
        opacity: 0,
      },
      0.15,
      "Start"
    );
*/
    /*
    TweenMax.from(homeResume, 2, {
      duration: 3,
      opacity: 0,
      y: 30,
      scrollTrigger: {
        trigger: homeResume,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete reverse reset",
        markers: false,
      },
    });
    */
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_e58mmvo",
        e.target,
        "user_aHamAASP738VEN8WKcGKX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="home">
      <NavSide
        scrollToResume={props.scrollToResume}
        scrollToProjects={props.scrollToProjects}
        scrollToAbout={props.scrollToAbout}
        scrollToJscode={props.scrollToJscode}
        scrollToContact={props.scrollToContact}
      />
      <section className="homeWelcome">
        <div className="homeWelcome__left">
          <h2
            className="homeWelcome__title"
            ref={(el) => {
              homeWelcomeTitle = el;
            }}
          >
            Hi, I'm Hadar,
          </h2>
          <h6
            className="homeWelcome__subtitle"
            ref={(el) => {
              homeWelcomeSubtitle = el;
            }}
          >
            a Front End web developer.
          </h6>
          <div
            className="homeWelcome__paragraphContainer"
            ref={(el) => {
              homeWelcomeParagraph = el;
            }}
          >
            <p className="homeWelcome__paragraph">
              I specialize in responsive websites and in{" "}
              <b>
                <img src="assets/img/react.svg" className="react-logo" /> react
              </b>
              ive, single-page dynamic applications.
            </p>
            <p className="homeWelcome__paragraph">
              I believe that the ability to code is the ability to bring new
              ideas to reality, to create innovation and to make a better world.
            </p>
          </div>
        </div>
        <div className="homeWelcome__right">
          <img
            src="assets/img/profile-hadar-croped.png"
            alt="profile image - Hadar"
            className="profile-image"
            ref={(el) => {
              homeWelcomeImage = el;
            }}
          />
        </div>
      </section>
      <section
        className="homeResume"
        ref={(el) => {
          homeResume = el;
        }}
      >
        <h2 className="section-title homeResume__sectionTitle">
          <span></span>
          Resume
        </h2>
        <div className="homeResume__container1">
          <div className="homeResume__container1--left">
            <h3 className="homeResume__title">Languages I speak</h3>
            <ul className="homeResume__langList">
              <li>HTML</li>
              <li>CSS</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="homeResume__container1--right">
            <h3 className="homeResume__title">Dev Tools</h3>
            <ul className="homeResume__devToolsList">
              <li>Visual Studio Code</li>
              <li>Git</li>
              <li>Github</li>
              <li>npm</li>
              <li>Terminal</li>
              <li>Bootstrap</li>
              <li>Googling☝️</li>
            </ul>
          </div>
        </div>
        <div className="homeResume__container2">
          <div className="homeResume__container2--left">
            <h3 className="homeResume__title">Work Experience</h3>

            <h5 className="homeResume__subtitle">
              Decathlon Austria GmbH, Wien
            </h5>
            <p className="homeResume__text">Front End Developer </p>
            <p className="homeResume__dates">Aug 2020 - present</p>

            <h5 className="homeResume__subtitle">OMT Handels GmbH, Wien</h5>
            <p className="homeResume__text">E-Commerce Store Management</p>
            <p className="homeResume__dates">Feb 2019 - Feb 2020</p>
          </div>
          <div className="homeResume__container2--right">
            <h3 className="homeResume__title">Education</h3>

            <h5 className="homeResume__subtitle">
              Codemaster Bootcamp
              <a href="assets/pdf/tag-cartification.pdf" target="_blank">
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="link-icon"
                />
              </a>
            </h5>
            <p className="homeResume__text">Talent Garden Innovation School</p>
            <p className="homeResume__text">
              Front End Development - JavaScript and React
            </p>
            <p className="homeResume__dates">Nov 2019 - Feb 2020</p>

            <h5 className="homeResume__subtitle">
              Teamtreehouse Technology Online Education
              <a href="assets/pdf/treehouse-cartification.pdf" target="_blank">
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="link-icon"
                />
              </a>
            </h5>
            <p className="homeResume__text">
              Front End Web Development - Techdegree
            </p>
            <p className="homeResume__dates">Dec 2017- Jan 2019</p>
          </div>
        </div>
        <a href="#" className="homeResume__downloadCvBtn">
          Download Resume
        </a>
      </section>
      <section className="homeProjects">
        <h2 className="section-title homeProjects__sectionTitle">
          <span></span>A Few Projects
        </h2>
        {/* <Projects /> */}
        <HighlightProjects />
      </section>

      <section className="homeAbout">
        <h2 className="section-title homeAbout__sectionTitle">
          <span></span>
          About Me
        </h2>

        <div className="homeAbout__contentContainer">
          <div className="homeAbout__textContainer">
            <div className="homeAbout__textBox">
              <h5 className="homeAbout__textTitle">Who am I?</h5>
              <p className="homeAbout__textParagraph">
                My name is <strong>Hadar Acobas</strong>, and I am a Front End
                Web Developer.<b></b> I have 2 Techdegrees in Frontend
                development.
              </p>
            </div>
            <div className="homeAbout__textBox">
              <h5 className="homeAbout__textTitle">What do I do?</h5>
              <p className="homeAbout__textParagraph">
                I take the backend data and creating a user-facing
                functionality. By integrating markup languages, design, scripts
                and frameworks, I create the environment for everything that
                user see, click and touch.
              </p>
            </div>
            <div className="homeAbout__textBox">
              <h5 className="homeAbout__textTitle">
                What am I passionate about?
              </h5>
              <p className="homeAbout__textParagraph">
                One thing I'm passionate about is digital transformation. It's
                interesting for me to see how businesses and organisations shift
                more and more towards digital approaches to automate processes
                and create improved experiences for their respective customers.
                This is the direction the world is moving to, and I'm happy to
                be part of this.<br></br>
                <br></br> Additionaly, I love to work with diverse people with
                differents mindsets, who want to create innovation.
              </p>
            </div>
            <div className="homeAbout__textBox">
              <h5 className="homeAbout__textTitle">Okay, what else?</h5>
              <p className="homeAbout__textParagraph">
                I'm married to my amazing wife🧚‍♀️, and we take care of our two
                sassy cats.
              </p>
              <iframe
                src="https://giphy.com/embed/xWlPqPbrlkEQU"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="homeJscode">
        <h2 className="section-title homeJscode__sectionTitle">
          <span></span>A Bit Of JS
        </h2>
        <JsCode />
      </section>
      <section className="homeContact">
        <h2 className="section-title homeContact__sectionTitle">
          <span></span>
          Contact
        </h2>
        <div className="homeContact__title">
          <p>Do you think I can fit in with your development team?</p>
          <p>Do you just want to say hi?</p>
          <p>I would love to hear from you</p>
        </div>

        <div className="homeContact__content">
          <div className="homeContact__contentLeft">
            <div className="homeContact__imageContainer">
              <img
                src="assets/img/profile-hadar-croped.png"
                alt="profile image - Hadar"
              />
            </div>
          </div>
          <div className="homeContact__contentRight">
            {showSuccessMessage === false && (
              <form className="homeContact__form" onSubmit={sendEmail}>
                <div>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name (required)"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email (required)"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="homeContact__form--submitButton">
                  <input type="submit" value="Send Email" />
                </div>
              </form>
            )}

            {showSuccessMessage && (
              <div className="homeContact__successMessageContainer">
                <span onClick={(e) => setShowSuccessMessage(false)}>X</span>
                <h4>Your Message is on the way</h4>
                <div className="homeContact__successMessageGiphyContainer">
                  <iframe
                    src="https://giphy.com/embed/3o7abAHdYvZdBNnGZq"
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="spacer" style={{ marginBottom: "10rem" }}></div>
    </div>
  );
}

export default Home;
