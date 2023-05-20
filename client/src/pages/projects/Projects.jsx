import { GitHub, Launch } from "@mui/icons-material";
import "./projects.css";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function Projects() {
  return (
    <section id="projects" className="project">
      <div className="container">
        <div className="project-content">
          <p>Portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className="projects-grid">
            <div className="pro pro__1 undefined">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://car-rental-ten.vercel.app/"
                  rel="noreferrer"
                >
                  <img
                    src="https://stefantopalovicdev.vercel.app/static/media/car-rental-full.c58b37da333d73238fdd.webp"
                    alt="website"
                    style={{
                      transform: "translateY(0%)",
                      transition: "transform 10s ease-in-out 0s",
                    }}
                  />
                </a>
              </div>
              <div className="pro__text">
                <h3>Car Rental 🚗</h3>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <Box
                    component="a"
                    target="_blank"
                    href="https://github.com/stefvndev/car-rental"
                    rel="noreferrer"
                    sx={{ "&:hover": { color: blue[700], transition: ".2s" } }}
                  >
                    Code <GitHub className="fa-solid fa-github link-icon" />
                  </Box>
                  <Box
                    component="a"
                    target="_blank"
                    href="https://car-rental-ten.vercel.app/"
                    rel="noreferrer"
                    sx={{ "&:hover": { color: blue[700], transition: ".2s" } }}
                  >
                    Live Demo{" "}
                    <Launch className="fa-solid fa-arrow-up-right-from-square link-icon" />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
