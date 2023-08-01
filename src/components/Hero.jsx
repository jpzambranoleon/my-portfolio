import Waving from "../assets/images/waving.png";
import Html from "../assets/images/icons/html.svg";
import Css from "../assets/images/icons/css3.svg";
import Js from "../assets/images/icons/javascript.svg";
import React from "../assets/images/icons/react.svg";
import Tailwind from "../assets/images/icons/tailwind.svg";
import Sass from "../assets/images/icons/scss.svg";
import NodeJs from "../assets/images/icons/nodejs.svg";
import MongoDb from "../assets/images/icons/mongodb.svg";
import MaterialUi from "../assets/images/icons/material-ui.svg";

export default function Hero() {
  const skillsIcons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: React,
      title: "React",
    },
    {
      img: Tailwind,
      title: "Tailwind CSS",
    },
    {
      img: Sass,
      title: "SCSS",
    },
    {
      img: MaterialUi,
      title: "Material-UI",
    },
    {
      img: NodeJs,
      title: "Node JS",
    },
  ];

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  Hi, Jean-Paul Zambrano-Leon. A passionate Full-stack React
                  Developer based in Hot Springs, Arkansas. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/stefan-topalovic-dev/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/stefvndev"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
