import Gymate from "../assets/images/gymate-home.webp";
import Raouf from "../assets/images/ecom.webp";
import Holux from "../assets/images/holux.webp";
import ProBox from "./ProBox";

export default function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Holux"
                img={Holux}
                description="A modernized real estate agency that brings a wide selection of homes that fits any budget, making it easier for clients to find their dream home."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/stefvndev/Gymate"
                demo="https://https://real-estate-website-blush.vercel.app/"
                scrollY="-77%"
                icon="🏠"
              />
              <ProBox
                title="gymate"
                img={Gymate}
                description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/stefvndev/Gymate"
                demo="https://gymate-iota.vercel.app/"
                scrollY="-89%"
                icon="🏋️"
              />

              <ProBox
                title="Raouf Ecommerce"
                img={Raouf}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/stefvndev/Minimalist-E-commerce"
                demo="https://minimalist-e-commerce.vercel.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              />
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  );
}
