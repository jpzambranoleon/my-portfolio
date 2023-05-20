import { keyframes } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import "./home.css";

const wave = keyframes`
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(20deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(15deg);
    }
    80% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  `;

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Front-End React Developer</h1>
              <p>
                Hi, I'm Stefan Topalovic. A passionate Front-end React Developer
                based in Belgrade, Serbia. 📍
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="#"
                >
                  <i className="fa-brands fa-linkedin">
                    <LinkedIn
                      sx={{
                        height: 30,
                        width: 30,
                        "&:hover": { color: blue[700], transition: ".2s" },
                      }}
                    />
                  </i>
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="#"
                >
                  <i className="fa-brands fa-github">
                    <GitHub
                      sx={{
                        height: 30,
                        width: 30,
                        "&:hover": { color: blue[700], transition: ".2s" },
                      }}
                    />
                  </i>
                </a>
              </span>
            </div>
            <div className="hero-img"></div>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li>
                  <img
                    src="/static/logos/html.png"
                    title="HTML5"
                    alt="program_img"
                  />
                </li>
                <li>
                  <img
                    src="/static/logos/css.png"
                    title="CSS3"
                    alt="program_img"
                  />
                </li>
                <li>
                  <img
                    src="/static/logos/javascript.png"
                    title="Javascript"
                    alt="program_img"
                  />
                </li>
                <li>
                  <img
                    src="/static/logos/react.png"
                    title="React"
                    alt="program_img"
                  />
                </li>
                <li>
                  <img
                    src="/static/logos/materialUI.png"
                    title="MUI"
                    alt="program_img"
                  />
                </li>
                <li>
                  <img
                    src="/static/logos/node.png"
                    title="NodeJs"
                    alt="program_img"
                  />
                </li>
                <li>
                  <img
                    src="/static/logos/mongoDB.png"
                    title="MongoDB"
                    alt="program_img"
                  />
                </li>
                <li>
                  <img
                    src="/static/logos/python.png"
                    title="Python"
                    alt="program_img"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
