import AboutImg from "../assets/images/about-img.webp";
import RoundedText from "../assets/images/text2.svg";
import WorkingEmoji from "../assets/images/working-emoji.png";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Full-Stack Developer <br /> based in Hot Springs,
                Arkansas 📍
              </h4>
              <p>
                As a Junior Full-Stack Developer, I possess an impressive
                arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and
                SCSS. I excel in designing and maintaining responsive websites
                that offer a smooth user experience. My expertise lies in
                crafting dynamic, engaging interfaces through writing clean and
                optimized code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
